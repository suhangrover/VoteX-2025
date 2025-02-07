import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../../data/team';
import { getGravatarUrl } from '../../utils/gravatar';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-effect rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="p-4 flex items-start space-x-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={getGravatarUrl(member.email, 200)}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white truncate">{member.name}</h3>
          <p className="text-purple-400 text-sm mb-2">{member.role}</p>
          <p className="text-gray-300 text-sm line-clamp-2">{member.bio}</p>
          <div className="flex space-x-3 mt-3">
            <a 
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${member.social.email}`}
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}