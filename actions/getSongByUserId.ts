import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { get } from "http";
import { cookies } from "next/headers";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionsData, error: sessionsError } =
    await supabase.auth.getSession();

  // If no session or error, return empty array (user not logged in)
  if (sessionsError || !sessionsData.session) {
    return [];
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionsData.session.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
  }

  return (data as any) || [];
};

export default getSongsByUserId;
