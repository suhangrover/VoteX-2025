import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, ArrowRight, RefreshCw } from 'lucide-react';
import { encryptData, decryptData } from '../../utils/encryption';

export default function EncryptionVisualizer() {
  const [input, setInput] = useState('');
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleEncrypt = () => {
    setIsEncrypting(true);
    try {
      const encrypted = encryptData(input);
      setEncryptedData(encrypted);
      
      // Simulate decryption after encryption
      const decrypted = decryptData(encrypted);
      setDecryptedData(decrypted);
    } catch (error) {
      console.error('Encryption failed:', error);
    }
    setIsEncrypting(false);
  };

  return (
    <div className="glass-effect rounded-xl p-6 space-y-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <Lock className="w-5 h-5 text-purple-400" />
        Real-time Encryption Visualizer
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Input Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Input Data</label>
          <div className="relative">
            <Unlock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter data to encrypt..."
            />
          </div>
          <button
            onClick={handleEncrypt}
            disabled={!input}
            className="w-full mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isEncrypting ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
            Encrypt
          </button>
        </div>

        {/* Encrypted Output */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Encrypted Output</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
            <textarea
              readOnly
              value={encryptedData}
              className="w-full h-[100px] pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-lg text-purple-400 font-mono text-sm"
              placeholder="Encrypted data will appear here..."
            />
          </div>
        </div>

        {/* Decrypted Verification */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Decryption Verification</label>
          <div className="relative">
            <Unlock className="absolute left-3 top-3 w-5 h-5 text-green-400" />
            <input
              readOnly
              value={decryptedData}
              className="w-full pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-lg text-green-400"
              placeholder="Decrypted verification..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}