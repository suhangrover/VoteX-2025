import React from 'react';
import { Play } from 'lucide-react';

interface VideoOverlayProps {
  onPlay: () => void;
}

export default function VideoOverlay({ onPlay }: VideoOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <button
        onClick={onPlay}
        className="w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center group"
      >
        <Play className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
}