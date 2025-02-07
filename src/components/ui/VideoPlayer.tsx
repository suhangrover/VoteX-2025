import React from 'react';
import { Play, Shield, Pause } from 'lucide-react';

interface VideoPlayerProps {
  youtubeId: string;
  posterUrl: string;
}

export default function VideoPlayer({ youtubeId, posterUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      <div className="absolute inset-0 rounded-2xl overflow-hidden glass-effect">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0`}
            title="VoteX Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-black/20">
            <img
              src={posterUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button
              onClick={handlePlayVideo}
              className="w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center group"
            >
              <Play className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
            </button>
          </div>
        )}
      </div>

      <div className="absolute -bottom-4 left-4 right-4 glass-effect rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Shield className="w-6 h-6 text-purple-400" />
          <div>
            <h4 className="text-white font-medium">Secure Voting Process</h4>
            <p className="text-sm text-gray-300">End-to-end encryption</p>
          </div>
        </div>
        <button
          onClick={handlePlayVideo}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center space-x-2"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}