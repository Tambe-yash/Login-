const supabaseUrl = 'https://sgcxoxqgkpkwdxhvwocp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnY3hveHFna3Brd2R4aHZ3b2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MjA4MDcsImV4cCI6MjA1NTE5NjgwN30.q7P8HJY-erOW7AbFmDEqx9xMOdjEs6DMThO1UVZRc5g'

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey)

window.supabaseClient = supabase 