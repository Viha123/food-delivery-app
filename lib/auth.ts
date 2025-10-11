import {authOptions} from '@/app/api/auth/[...nextauth]/route'
import {getServerSession} from 'next-auth/next'

export async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions)
    return (session && session.user) || null
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

export function isAdmin(user: any) {
  return user && user.role === 'ADMIN';
}

export function isUser(user: any) {
  return user && user.role === 'USER';
}