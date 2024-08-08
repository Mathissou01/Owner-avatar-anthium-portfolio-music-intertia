import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import MusicCard from '@/Components/Card/MusicCard';
import { PaginatedData, Track } from '@/types';

export default function HomePage() {

  const { tracks } = usePage<{
    contacts: PaginatedData<Track>;
  }>().props;
  console.log("tracks", tracks);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
      <Head title="Home" />
      <div className="w-full max-w-md">
        {tracks?.map((track: Track, index) => (  // Correction ici
          <MusicCard
            key={index}
            title={track.title}
            artist={track.artist}
            dropboxLink={track.dropbox_link}
            youtubeLink={track.youtube_link}
            bpm={track.bpm}
            clef={track.key}
          />
        ))}
        {/*<MusicCard*/}
        {/*    title="test"*/}
        {/*    artist="2"*/}
        {/*  />*/}
      </div>
    </div>
  );
}
