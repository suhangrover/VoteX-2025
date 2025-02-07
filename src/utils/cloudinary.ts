// Cloudinary configuration
export const CLOUDINARY_CLOUD_NAME = 'your-cloud-name';

export const getCloudinaryUrl = (publicId: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}`;
};