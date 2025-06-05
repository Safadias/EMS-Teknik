
// supabase.js – forbind frontend til Supabase

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_KEY = "public-anon-key";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
