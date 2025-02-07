import React from 'react';
import { Clock, Lock } from 'lucide-react';

export default function TableHeader() {
  return (
    <div className="bg-white/5 rounded-t-lg">
      <div className="grid grid-cols-12 gap-4 px-6 py-3">
        <div className="col-span-1">
          <Clock className="w-4 h-4 text-gray-400" />
        </div>
        <div className="col-span-4 text-left text-sm font-semibold text-gray-300">
          Voter Name
        </div>
        <div className="col-span-7 text-left text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Lock className="w-4 h-4 text-purple-400" />
          <span>Encrypted Vote Data</span>
        </div>
      </div>
    </div>
  );
}