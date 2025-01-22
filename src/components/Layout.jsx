import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
              alt="Logo" 
              className="h-8 w-8"
            />
            <Link to="/" className="text-xl font-bold">Mercury Support Portal</Link>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              to="/audits" 
              className={`hover:text-blue-300 ${location.pathname === '/audits' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Audits
            </Link>
            <Link 
              to="/fire-risk" 
              className={`hover:text-blue-300 ${location.pathname === '/fire-risk' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Fire Risk
            </Link>
            <Link 
              to="/incidents" 
              className={`hover:text-blue-300 ${location.pathname === '/incidents' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Incidents
            </Link>
            <Link 
              to="/registry" 
              className={`hover:text-blue-300 ${location.pathname === '/registry' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Registry
            </Link>
            <Link 
              to="/documentation" 
              className={`hover:text-blue-300 ${location.pathname === '/documentation' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Docs
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-20 p-6 flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400"
          >
            Made on ZAPT
          </a>
        </div>
      </footer>
    </div>
  );
};