import { z } from 'zod';

export const aadharSchema = z.string()
  .length(12)
  .regex(/^\d+$/, 'Aadhar number must contain only digits');

export const nameSchema = z.string()
  .min(3, 'Name must be at least 3 characters')
  .max(50, 'Name must not exceed 50 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces');

export const validateAadhar = (aadhar: string): boolean => {
  try {
    aadharSchema.parse(aadhar);
    return true;
  } catch (error) {
    return false;
  }
};

export const validateName = (name: string): boolean => {
  try {
    nameSchema.parse(name);
    return true;
  } catch (error) {
    return false;
  }
};