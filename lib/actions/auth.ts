'use server';

import {getUserByEmail, createUser} from '@/lib/services/user';
import {verifyPassword, hashPassword} from '@/lib/auth-utils';

export async function authenticateUser(email: string, password: string) {
  try {
    // Validate required fields
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Use your existing user service to get user by email
    const user = await getUserByEmail(email);

    if (!user || !user.password) {
      throw new Error('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Return user data (without password)
    const {password: _, ...userWithoutPassword} = user;

    return {
      success: true,
      user: userWithoutPassword,
    };

  } catch (error) {
    console.error('Authentication error:', error);
    throw new Error(
        error instanceof Error ? error.message : 'Authentication failed');
  }
}

export async function registerUser(userData: {
  firstName?: string;
  lastName?: string; email: string;
  phoneNumber?: string; password: string;
}) {
  try {
    const {firstName, lastName, email, phoneNumber, password} = userData;

    // Validate required fields
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user using your service
    const user = await createUser({
      firstName: firstName || null,
      lastName: lastName || null,
      name: firstName && lastName ? `${firstName} ${lastName}` :
                                    firstName || lastName || null,
      email,
      phoneNumber: phoneNumber || null,
      password: hashedPassword,
      role: 'USER',  // Default role
    } as any);       // Type assertion for password field

    // Return user data (without password)
    const {password: _, ...userWithoutPassword} = user;

    return {
      success: true,
      user: userWithoutPassword,
    };

  } catch (error) {
    console.error('Registration error:', error);
    throw new Error(
        error instanceof Error ? error.message : 'Registration failed');
  }
}