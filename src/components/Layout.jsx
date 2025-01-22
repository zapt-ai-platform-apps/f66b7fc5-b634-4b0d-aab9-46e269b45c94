import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-sm p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
              alt="Logo" 
              className="h-8 w-8 rounded-lg"
            />
            <Link to="/" className="text-xl font-semibold text-gray-900">Mercury Support Portal</Link>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              to="/audits" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/audits' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
            >
              Audits
            </Link>
            <Link 
              to="/fire-risk" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/fire-risk' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
            >
              Fire Risk
            </Link>
            <Link 
              to="/incidents" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/incidents' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
            >
              Incidents
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-20 p-6 flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};