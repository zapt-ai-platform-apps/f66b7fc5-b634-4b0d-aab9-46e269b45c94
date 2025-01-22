import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../supabaseClient';
import * as Sentry from '@sentry/browser';

export default function AuthComponent() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Mercury Support Portal</h2>
      <div className="mb-4 text-center">
        <p className="text-sm text-gray-600 mb-2">Sign in with your organization account</p>
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-xs"
        >
          Powered by ZAPT
        </a>
      </div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        socialLayout="horizontal"
        localization={{
          variables: {
            sign_in: {
              email_label: 'Email',
              password_label: 'Password',
              button_label: 'Sign In',
            },
          },
        }}
        redirectTo={window.location.origin}
      />
    </div>
  );
}