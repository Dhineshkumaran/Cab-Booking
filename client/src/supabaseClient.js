import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient("https://oavlzorwfohierlfacfb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdmx6b3J3Zm9oaWVybGZhY2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NzM3NDQsImV4cCI6MjA1MzU0OTc0NH0.r8MKJNx8E2h2EG_AbeK7268TTlpY84E0uAOoiG2cCM8");