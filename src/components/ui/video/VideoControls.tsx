import React from 'react';
import { Shield, Play, Pause } from 'lucide-react';

interface VideoControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function VideoControls({ isPlaying, onPlayPause }: VideoControlsProps) {
  return (
    <div className="absolute -bottom-4 left-4 right-4 glass-effect rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Shield className="w-6 h-6 text-purple-400" />
        <div>
          <h4 className="text-white font-medium">Secure Voting Process</h4>
          <p className="text-sm text-gray-300">End-to-end encryption</p>
        </div>
      </div>
      <button
        onClick={onPlayPause}
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
  );
}