import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AuthPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign in with ZAPT</h2>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'facebook', 'apple']}
        appearance={{
          extend: false,
          className: {
            container: 'space-y-4',
            button: 'w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
            input: 'w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500',
            label: 'block text-sm font-medium text-gray-700 mb-1',
          }
        }}
      />
      <p className="mt-4 text-sm text-gray-600">
        By signing in, you agree to our{' '}
        <a href="https://www.zapt.ai/terms" target="_blank" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
      </p>
    </div>
  );
}