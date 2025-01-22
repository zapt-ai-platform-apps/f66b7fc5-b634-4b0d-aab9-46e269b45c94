import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';
import AuthPage from './pages/AuthPage';
import AuditsPage from './pages/AuditsPage';
import FireRiskPage from './pages/FireRiskPage';
import IncidentsPage from './pages/IncidentsPage';
import RegistryPage from './pages/RegistryPage';
import DocumentationPage from './pages/DocumentationPage';
import LoadingSpinner from './components/LoadingSpinner';
import { Layout } from './components/Layout';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={session ? <AuditsPage /> : <AuthPage />} />
        <Route path="/audits" element={session ? <AuditsPage /> : <AuthPage />} />
        <Route path="/fire-risk" element={session ? <FireRiskPage /> : <AuthPage />} />
        <Route path="/incidents" element={session ? <IncidentsPage /> : <AuthPage />} />
        <Route path="/registry" element={session ? <RegistryPage /> : <AuthPage />} />
        <Route path="/documentation" element={session ? <DocumentationPage /> : <AuthPage />} />
      </Routes>
    </Layout>
  );
}