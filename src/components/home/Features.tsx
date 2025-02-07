import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, Key, UserCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Blockchain Security',
    description: 'Advanced blockchain technology ensures your vote is immutable and transparent.'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Military-grade encryption protects your vote from start to finish.'
  },
  {
    icon: CheckCircle,
    title: 'Instant Verification',
    description: 'Real-time vote verification and confirmation system.'
  },
  {
    icon: Key,
    title: 'Secure Authentication',
    description: 'Multi-factor authentication ensures only eligible voters participate.'
  },
  {
    icon: UserCheck,
    title: 'Voter Privacy',
    description: 'Anonymous voting system that protects your identity.'
  },
  {
    icon: Clock,
    title: 'Real-time Results',
    description: 'Live vote counting with instant result updates.'
  }
];

export default function Features() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Advanced Features for Modern
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mt-4">
              Digital Democracy
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Our platform combines cutting-edge technology with user-friendly design to create
            a secure and accessible voting experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}