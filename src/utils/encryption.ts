import CryptoJS from 'crypto-js';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || 'your-secret-key-here';
const SALT = import.meta.env.VITE_SALT || 'voting-salt';
const ITERATIONS = 1000;

export const encryptData = (data: string): string => {
  try {
    // Add timestamp to prevent replay attacks
    const timestamp = Date.now().toString();
    const dataWithTimestamp = `${data}|${timestamp}`;
    
    // Generate a unique salt for each encryption
    const uniqueSalt = CryptoJS.lib.WordArray.random(128/8);
    
    // Key derivation with PBKDF2
    const key = CryptoJS.PBKDF2(SECRET_KEY, uniqueSalt, {
      keySize: 256/32,
      iterations: ITERATIONS
    });

    // Encrypt with AES
    const encrypted = CryptoJS.AES.encrypt(dataWithTimestamp, key.toString());
    
    // Combine salt and encrypted data
    return uniqueSalt.toString() + encrypted.toString();
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Encryption failed');
  }
};

export const decryptData = (encryptedData: string): string => {
  try {
    // Extract salt (first 32 chars) and ciphertext
    const salt = CryptoJS.enc.Hex.parse(encryptedData.slice(0, 32));
    const ciphertext = encryptedData.slice(32);

    // Derive the same key using PBKDF2
    const key = CryptoJS.PBKDF2(SECRET_KEY, salt, {
      keySize: 256/32,
      iterations: ITERATIONS
    });

    // Decrypt
    const decryptedBytes = CryptoJS.AES.decrypt(ciphertext, key.toString());
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    
    // Extract original data without timestamp
    const [data] = decryptedText.split('|');
    return data;
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Decryption failed');
  }
};