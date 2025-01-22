import { supabase } from '../supabaseClient';
import * as Sentry from '@sentry/browser';

export const useAuthHandler = (setLoading) => {
  const handleAuthStateChange = async (event) => {
    if (event === 'SIGNED_IN') {
      setLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        Sentry.setUser({ email: user.email });
      } catch (error) {
        Sentry.captureException(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return handleAuthStateChange;
};