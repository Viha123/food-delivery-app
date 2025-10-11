'use server';

import {getUserByEmail} from '@/lib/services/user';
import {verifyPassword} from '@/lib/auth-utils';

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