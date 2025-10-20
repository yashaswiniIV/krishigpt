// frontend/src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtcqgbooxihzdkbaqsli.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Y3FnYm9veGloemRrYmFxc2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3Nzc1ODksImV4cCI6MjA3NjM1MzU4OX0.nQY8_ZHAQR9XhOB_H2JaoNxd8R5SgsULRLWVnbz8w00';

// Basic validation
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is missing. Make sure to set them in supabaseClient.js");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);