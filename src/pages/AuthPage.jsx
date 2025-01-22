import React, { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuthHandler } from '../hooks/useAuthHandler';
import { appearance, localization } from '../config/authConfig';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const handleAuthStateChange = useAuthHandler(setLoading);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 relative transition-all duration-300 hover:shadow-3xl">
        <div className="text-center mb-8">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=96&height=96"
            alt="Mercury Logo"
            className="mx-auto h-24 w-24 mb-6 rounded-2xl shadow-lg"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Mercury Support
          </h1>
          <p className="text-gray-600 mt-2">Compliance Management Platform</p>
        </div>

        <div className="mb-6 text-center">
          <p className="text-sm text-gray-500 font-medium mb-4">
            Sign in with ZAPT
          </p>
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Learn more about ZAPT
          </a>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="space-y-6">
            <Auth
              supabaseClient={supabase}
              providers={['google', 'facebook', 'apple']}
              socialLayout="vertical"
              magicLink={true}
              appearance={appearance}
              theme="default"
              localization={localization}
              onAuthStateChange={handleAuthStateChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}