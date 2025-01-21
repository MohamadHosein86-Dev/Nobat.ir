import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://kihtkgcftgqjqjjemlgh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpaHRrZ2NmdGdxanFqamVtbGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNzg1MDIsImV4cCI6MjA0Nzg1NDUwMn0.3gMu1U99HyjIh-HM45j7P9RoK8iwHT7OibpjYnlGE9M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
