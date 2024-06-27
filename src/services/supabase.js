import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hqkpwqgdlwgkfoqxzedj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhxa3B3cWdkbHdna2ZvcXh6ZWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MzU5MDUsImV4cCI6MjAzMzQxMTkwNX0.5CWUYWSc1pJT8S6x_5dU6AC5gyB3v5D6GnA1jXJYm30"
const supabase = createClient(supabaseUrl, supabaseKey)


export default  supabase