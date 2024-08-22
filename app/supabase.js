import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://btirfdwttbsbktrucglf.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
if (!supabaseKey) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_KEY");
}
export const supabase = createClient(supabaseUrl, supabaseKey);
