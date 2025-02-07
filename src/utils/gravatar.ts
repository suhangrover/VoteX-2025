import crypto from 'crypto-js';

export const getGravatarUrl = (email: string, size: number = 200): string => {
  // Convert email to lowercase and trim whitespace
  const normalizedEmail = email.toLowerCase().trim();
  
  // Create MD5 hash of email
  const hash = crypto.MD5(normalizedEmail).toString();
  
  // Construct Gravatar URL
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
};