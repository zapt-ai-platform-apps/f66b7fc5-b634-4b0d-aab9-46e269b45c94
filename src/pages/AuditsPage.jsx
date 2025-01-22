import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuditList from '../components/Audit/AuditList';
import NewAuditModal from '../components/Audit/NewAuditModal';
import { supabase } from '../supabaseClient';
import * as Sentry from '@sentry/browser';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AuditsPage() {
  const [audits, setAudits] = useState([]);
  const [showNewModal, setShowNewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAudits = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const response = await fetch('/api/audits', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session?.access_token}`
          }
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch audits: ${errorText}`);
        }
        
        const data = await response.json();
        setAudits(data);
      } catch (error) {
        Sentry.captureException(error);
        console.error('Error fetching audits:', error);
        alert('Failed to load audits. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchAudits();
  }, []);

  const handleNewAudit = (newAudit) => {
    setAudits([newAudit, ...audits]);
    navigate(`/audits/${newAudit.id}`);
  };

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Audit Management</h1>
        <button
          onClick={() => setShowNewModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Start New Audit
        </button>
      </div>

      <AuditList audits={audits} />
      
      {showNewModal && (
        <NewAuditModal 
          onClose={() => setShowNewModal(false)}
          onSuccess={handleNewAudit}
        />
      )}
    </div>
  );
}