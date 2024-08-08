import React from 'react';
import { Download, Share } from 'lucide-react';
// Définir l'interface pour les props
interface MusicCardProps {
  title: string;
  artist: string;
  genre: string;
  bpm: number;
  key: string;
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
                                    key,
                                    dropboxLink,
                                    youtubeLink,
                                    duration,
                                    year
                                  }: MusicCardProps) {
  return(
    <div
      className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
      <div className="p-4">
        <iframe
          className="rounded-xl w-full"
          height="315"
          src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share"
          allowFullScreen></iframe>
      </div>
      <div className="flex justify-between p-6">
        <div className="flex items-center space-x-4">
          <img className="h-14 rounded-full"
               src="https://yt3.googleusercontent.com/ytc/AIdro_m3ybc80_xZMMhBs8gZ2xPOVc3kVdMGqhUZ50rWm0HdvFk=s160-c-k-c0x00ffffff-no-rj"
               alt="anthium-logo" />
          <div className="flex-col">
            <h1 className="text-lg text-gray-900 font-bold">{title}</h1>
            <h1 className="text-lg text-gray-900 font-bold">{artist}</h1>
          </div>
        </div>
        <div className="flex space-x-6 items-center">
          <div className="flex space-x-2 items-center">
						<span>
              <Download size={20} />
          </span>
          </div>
          <div className="flex space-x-2 items-center pr-4">
						<span>
        <Share size={20} />
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}
