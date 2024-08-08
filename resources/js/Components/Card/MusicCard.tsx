import React from 'react';
import { Download, Share } from 'lucide-react';

// Définir l'interface pour les props
interface MusicCardProps {
  title: string;
  artist: string;
  genre: string;
  bpm: number;
  clef: string;
  dropboxLink: string;
  youtubeLink: string;
  duration: string;
  year: string;
}

export default function MusicCard({
                                    title,
                                    artist,
                                    genre,
                                    bpm,
                                    clef,
                                    dropboxLink,
                                    youtubeLink,
                                    duration,
                                    year
                                  }: MusicCardProps) {
  return (
    <div className="max-w-m bg-white rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transform transition-all duration-500 mt-5">
      <div className="p-3">
        <iframe
          className="rounded-lg w-full"
          height="200"
          src={youtubeLink}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
          allowFullScreen></iframe>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex items-center space-x-3">
          <img className="h-10 rounded-full"
               src="https://yt3.googleusercontent.com/ytc/AIdro_m3ybc80_xZMMhBs8gZ2xPOVc3kVdMGqhUZ50rWm0HdvFk=s160-c-k-c0x00ffffff-no-rj"
               alt="anthium-logo" />
          <div className="flex-col">
            <h1 className="text-md text-gray-900 font-bold">{title}</h1>
            <h2 className="text-sm text-gray-700">{artist}</h2>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <h2 className="text-sm text-gray-700">{bpm} BPM</h2>
          <h2 className="text-sm text-gray-700">{clef}</h2>
          <span>
            <Download size={18} />
          </span>
          <span>
            <Share size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}
