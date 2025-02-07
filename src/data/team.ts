export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  bio: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Suhan',
    role: 'Full Stack Developer',
    email: 'suhangrover@gmail.com',
    bio: 'Passionate developer with expertise in React, Node.js, and modern web technologies.',
    social: {
      linkedin: 'https://linkedin.com/in/suhan',
      github: 'https://github.com/suhan',
      email: 'suhangrover@gmail.com'
    }
  },
  {
    id: 2,
    name: 'Sukhdev',
    role: 'Frontend Developer',
    email: 'sukhdev@votex.com',
    bio: 'UI/UX enthusiast specializing in creating beautiful and responsive web applications.',
    social: {
      linkedin: 'https://linkedin.com/in/sukhdev',
      github: 'https://github.com/sukhdev',
      email: 'sukhdev@votex.com'
    }
  },
  {
    id: 3,
    name: 'Blank',
    role: 'Ambassador',
    email: 'ambassador1@votex.com',
    bio: 'Dedicated to promoting secure and transparent digital voting solutions across organizations.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'ambassador1@votex.com'
    }
  },
  {
    id: 4,
    name: 'Blank',
    role: 'Ambassador',
    email: 'ambassador2@votex.com',
    bio: 'Working to revolutionize organizational voting through blockchain technology.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'ambassador2@votex.com'
    }
  }
];