'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [localUser, setLocalUser] = useState<any>(null);

  // Check for localStorage user on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setLocalUser(JSON.parse(storedUser));
      }
    }
  }, []);

  // Use either NextAuth session or localStorage user
  const currentUser = session?.user || localUser;
  const isAuthenticated = !!currentUser;

  const handleSignOut = () => {
    if (session) {
      // NextAuth sign out
      signOut({ callbackUrl: '/' });
    } else {
      // Custom auth sign out
      localStorage.removeItem('user');
      setLocalUser(null);
      window.location.href = '/';
    }
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍎</span>
              </div>
              <span className="text-xl font-bold text-gray-800">FoodDelivery</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentUser?.role === 'ADMIN' ? (
              // Admin Navigation
              <>
                <Link 
                  href="/home/admin" 
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/home/admin/inventory" 
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  📦 Inventory
                </Link>
                <Link 
                  href="/home/admin/vehicles" 
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  🚛 Vehicles
                </Link>
                <Link 
                  href="/home/admin/orders" 
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  📋 Orders
                </Link>
                <Link 
                  href="/home/admin/users" 
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  👥 Users
                </Link>
              </>
            ) : (
              // Regular User Navigation
              <>
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/home/user" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Browse Items
                </Link>
                <Link 
                  href="/cart" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  🛒 Cart
                </Link>
              </>
            )}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' && (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="text-sm text-gray-600">Loading...</span>
              </div>
            )}
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 hover:bg-gray-50 transition-colors"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover border-2 border-gray-200"
                    src={currentUser.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name || currentUser.email || 'User')}&background=3b82f6&color=ffffff`}
                    alt="Profile"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-gray-900 font-medium">
                      {currentUser.name || 'User'}
                    </span>
                    {currentUser.role === 'ADMIN' && (
                      <span className="text-xs text-amber-600 font-medium">Admin</span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User dropdown menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        <div className="font-medium">{currentUser.name || 'User'}</div>
                        <div className="text-gray-500 text-xs">{currentUser.email}</div>
                        {currentUser.role === 'ADMIN' && (
                          <div className="text-amber-600 text-xs font-medium mt-1">👑 Administrator</div>
                        )}
                      </div>
                      
                      {currentUser.role === 'ADMIN' ? (
                        // Admin dropdown options
                        <>
                          <Link
                            href="/admin/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            👤 Admin Profile
                          </Link>
                          <Link
                            href="/home/admin/inventory"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            📦 Manage Inventory
                          </Link>
                          <Link
                            href="/home/admin/vehicles"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            🚛 Manage Vehicles
                          </Link>
                          <Link
                            href="/admin/settings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            ⚙️ Settings
                          </Link>
                        </>
                      ) : (
                        // Regular user dropdown options
                        <>
                          <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            👤 Profile
                          </Link>
                          <Link
                            href="/orders"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            📦 My Orders
                          </Link>
                          <Link
                            href="/cart"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            🛒 Cart
                          </Link>
                          <Link
                            href="/favorites"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            ❤️ Favorites
                          </Link>
                        </>
                      )}
                      
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : status === 'unauthenticated' && (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/auth/signin"
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside handler for dropdowns */}
      {(isUserMenuOpen || isMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsUserMenuOpen(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </nav>
  );
}