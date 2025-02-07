import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../team/TeamMemberCard';
import { teamMembers } from '../../data/team';

export default function Team() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Meet Our Expert
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mt-4">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented team works together to create a secure, accessible,
            and transparent voting platform for organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}