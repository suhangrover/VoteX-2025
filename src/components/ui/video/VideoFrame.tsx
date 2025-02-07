import React from 'react';

interface VideoFrameProps {
  youtubeId: string;
  posterUrl: string;
  isPlaying: boolean;
}

export default function VideoFrame({ youtubeId, posterUrl, isPlaying }: VideoFrameProps) {
  if (isPlaying) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0`}
        title="VoteX Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-black/20">
      <img
        src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
        alt="Blockchain Voting"
        className="w-full h-full object-cover opacity-80"
      />
    </div>
  );
}