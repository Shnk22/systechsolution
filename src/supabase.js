import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpingsbdzfiujcsiuusw.supabase.co";

const supabaseAnonKey = "sb_publishable_z-xu-Hv-9e0yeb2MdLSHtA__dpjPFW7";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
