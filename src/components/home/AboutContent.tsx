import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function AboutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Secure Digital Democracy
          <span className="block bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mt-2">
            For Modern Organizations
          </span>
        </h2>
        
        <div className="space-y-6 text-gray-300">
          <p>
            This project enhances voting transparency by implementing strict database access controls,
            limiting it to authorized administrators with specific credentials. It provides a secure
            and reliable voting platform for corporations, NGOs, schools, and administrative bodies.
          </p>
          
          <p>
            Currently in the prototype phase, the system demonstrates its capabilities using dummy
            Aadhaar Numbers for test users. In production, this will be replaced by a secure database
            handling credentials from multiple organizations.
          </p>
          
          <p>
            Our system collects and encrypts crucial credentials, with decryption occurring only in
            the backend. This ensures user identities are securely matched with their hashed votes
            post-registration.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80"
            alt="Digital Democracy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass-effect rounded-xl p-6">
            <div className="flex items-center space-x-4">
              <Shield className="w-10 h-10 text-purple-400" />
              <div>
                <h4 className="text-xl font-bold text-white">SHA-256 Encryption</h4>
                <p className="text-gray-300">Votes are securely hashed and stored</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}