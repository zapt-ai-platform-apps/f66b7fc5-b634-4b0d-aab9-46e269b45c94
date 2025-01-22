import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import * as Sentry from '@sentry/browser';
import LoadingSpinner from '../LoadingSpinner';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';

const NewAuditModal = ({ onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    round_name: '',
    site_name: '',
    template: 'standard'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const response = await fetch('/api/audits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.access_token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to create audit');
      const newAudit = await response.json();
      onSuccess(newAudit);
      onClose();
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error creating audit:', error);
      alert('Failed to create audit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Start New Audit</h2>
        
        <form onSubmit={handleSubmit}>
          {step === 1 && <Step1Form formData={formData} setFormData={setFormData} />}
          {step === 2 && <Step2Form formData={formData} setFormData={setFormData} />}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
              >
                Back
              </button>
            )}
            
            {step < 2 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer ml-auto disabled:opacity-50"
              >
                {loading ? <LoadingSpinner /> : 'Create Audit'}
              </button>
            )}
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default NewAuditModal;