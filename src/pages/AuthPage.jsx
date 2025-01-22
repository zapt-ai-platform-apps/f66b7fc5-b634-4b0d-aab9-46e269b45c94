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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
        <div className="text-center mb-8">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=80&height=80"
            alt="Mercury Logo"
            className="mx-auto h-16 w-16 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mercury Support Portal</h1>
          <p className="text-gray-600">Sign in to continue to your safety portal</p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Sign in with your organization account</p>
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Powered by ZAPT
              </a>
            </div>

            <Auth
              supabaseClient={supabase}
              providers={['google', 'apple']}
              socialLayout="horizontal"
              magicLink={true}
              appearance={appearance}
              theme="default"
              localization={localization}
              onAuthStateChange={handleAuthStateChange}
            />
          </>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need help? <a href="mailto:support@mercury.com" className="text-blue-600 hover:underline">Contact support</a></p>
        </div>
      </div>
    </div>
  );
}