import React from 'react';
import VideoFrame from './VideoFrame';
import VideoOverlay from './VideoOverlay';
import VideoControls from './VideoControls';

interface VideoContainerProps {
  youtubeId: string;
  posterUrl: string;
}

export default function VideoContainer({ youtubeId, posterUrl }: VideoContainerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      <div className="absolute inset-0 rounded-2xl overflow-hidden glass-effect">
        <VideoFrame 
          youtubeId={youtubeId} 
          posterUrl={posterUrl} 
          isPlaying={isPlaying} 
        />
        {!isPlaying && (
          <VideoOverlay onPlay={handlePlayVideo} />
        )}
      </div>
      <VideoControls 
        isPlaying={isPlaying} 
        onPlayPause={handlePlayVideo} 
      />
    </div>
  );
}