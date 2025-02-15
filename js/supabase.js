const supabaseUrl = 'https://txbawtbwsebwlciujwkp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4YmF3dGJ3c2Vid2xjaXVqd2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MjA1MTksImV4cCI6MjA1NTE5NjUxOX0.3WdkQRgUsz2sO0PHuzeN7MFYz8ieEgdedmu_uQOIDko'

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey)

window.supabaseClient = supabase 