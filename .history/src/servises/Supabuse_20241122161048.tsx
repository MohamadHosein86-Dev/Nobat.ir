import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://clecsjeklskophgcaqyy.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZWNzamVrbHNrb3BoZ2NhcXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3Nzg2MzQsImV4cCI6MjA0MzM1NDYzNH0.wu6MSAp2YCSuX731EoGmPEep55kT-_4-VY7SnEbpwfY`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
