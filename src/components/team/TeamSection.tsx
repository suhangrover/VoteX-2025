import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/team';

export default function TeamSection() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Our talented team works together to create a secure, accessible,
            and transparent voting platform for organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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