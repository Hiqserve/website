/**
 * Validation utility functions for common form validations
 */

/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns True if the email is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a password (at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number)
 * @param password - The password to validate
 * @returns True if the password is valid, false otherwise
 */
export function isValidPassword(password: string): boolean {
  if (!password) return false;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validates a phone number (simple validation for demonstration purposes)
 * @param phone - The phone number to validate
 * @returns True if the phone number is valid, false otherwise
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
}

/**
 * Validates a URL
 * @param url - The URL to validate
 * @returns True if the URL is valid, false otherwise
 */
export function isValidUrl(url: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Checks if a string is empty or only contains whitespace
 * @param str - The string to check
 * @returns True if the string is empty or only contains whitespace, false otherwise
 */
export function isEmpty(str: string): boolean {
  return !str || str.trim() === '';
}

/**
 * Checks if a value is within a specified range
 * @param value - The value to check
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns True if the value is within the range, false otherwise
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Validates a credit card number using the Luhn algorithm
 * @param cardNumber - The credit card number to validate
 * @returns True if the credit card number is valid, false otherwise
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber) return false;
  
  // Remove spaces and dashes
  const sanitized = cardNumber.replace(/[\s-]/g, '');
  
  // Check if the sanitized string contains only digits
  if (!/^\d+$/.test(sanitized)) return false;
  
  // Luhn algorithm
  let sum = 0;
  let shouldDouble = false;
  
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
}