import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yytqqkpdyukbmhshlfps.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHFxa3BkeXVrYm1oc2hsZnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODA1ODksImV4cCI6MjA2OTk1NjU4OX0.Og_-v8FweSr13MOl5Hf8CjcI_FTZtL7ZPxBHnS33-ug'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)