import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export function Navbar({ session }) {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
              alt="Mercury Logo" 
              className="h-8 w-8"
            />
            <div className="hidden md:block ml-6">
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link to="/audits" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Audits</Link>
                <Link to="/fire-risk-assessments" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Fire Risk</Link>
                <Link to="/incidents" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Incidents</Link>
                <Link to="/registry" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Registry</Link>
                <Link to="/documentation" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Documents</Link>
              </div>
            </div>
          </div>
          {session ? (
            <button 
              onClick={() => supabase.auth.signOut()}
              className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-200 cursor-pointer"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/auth" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-200 cursor-pointer">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}