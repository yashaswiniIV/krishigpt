// frontend/src/Auth.js
import React, { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // Toggle between Login/Sign Up

  const handleAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let error;
      if (isSigningUp) {
        // Sign Up
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        error = signUpError;
         if (!error && data?.user) {
           alert('Sign up successful! Check your email for the confirmation link.');
           // Optionally reset fields or change view
           setEmail('');
           setPassword('');
           setIsSigningUp(false); // Switch back to login after signup
         }

      } else {
        // Sign In
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
         error = signInError;
         // No alert needed on successful login, App.js will handle redirect/state change
      }
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget">
        <h1 className="header">{isSigningUp ? 'KrishiGPT Sign Up' : 'KrishiGPT Login'}</h1>
        <p className="description">
          {isSigningUp ? 'Create a new account' : 'Sign in to your account'}
        </p>
        <form onSubmit={handleAuth}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
           <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading...</span> : (isSigningUp ? 'Sign Up' : 'Sign In')}
            </button>
          </div>
        </form>
         <button
           onClick={() => setIsSigningUp(!isSigningUp)}
           className="button link"
           style={{marginTop: '10px'}}
         >
           {isSigningUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
         </button>
      </div>
    </div>
  );
}