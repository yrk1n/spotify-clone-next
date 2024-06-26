import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  //use session context when only authenticated users can access the song
  //   const{supabaseClient} = useSessionContext();
  if (!song) return "";

  // const {data:songData} = supabaseClient.storage.from('songs').createSignedUrl(song.id, 60);

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;
