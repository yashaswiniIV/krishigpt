// frontend/src/Dashboard.js
import React from 'react';
import { supabase } from './supabaseClient';

export default function Dashboard({ session }) {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
    // State change will handle UI update in App.js
  };

  return (
    <div>
      <h2>Welcome, Farmer!</h2>
      <p>Your email: {session.user.email}</p>
      {/* Profile form and recommendation display will go here later */}
      <button onClick={handleSignOut} className="button block" style={{ marginTop: '20px' }}>
        Sign Out
      </button>
    </div>
  );
}