/**
 * Date utility functions for common date operations
 */

/**
 * Formats a date to a string using the specified format
 * @param date - The date to format
 * @param format - The format to use (default: 'YYYY-MM-DD')
 * @returns The formatted date string
 */
export function formatDate(date: Date, format = 'YYYY-MM-DD'): string {
  if (!date) return '';
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Returns a relative time string (e.g., "2 hours ago", "yesterday")
 * @param date - The date to format
 * @returns The relative time string
 */
export function getRelativeTimeString(date: Date): string {
  if (!date) return '';
  
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSecs < 60) {
    return 'just now';
  } else if (diffInMins < 60) {
    return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else {
    return formatDate(date);
  }
}

/**
 * Adds a specified number of days to a date
 * @param date - The date to add days to
 * @param days - The number of days to add
 * @returns The new date
 */
export function addDays(date: Date, days: number): Date {
  if (!date) return new Date();
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Checks if a date is today
 * @param date - The date to check
 * @returns True if the date is today, false otherwise
 */
export function isToday(date: Date): boolean {
  if (!date) return false;
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

/**
 * Gets the start of a day (midnight)
 * @param date - The date to get the start of
 * @returns The start of the day
 */
export function startOfDay(date: Date): Date {
  if (!date) return new Date();
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Gets the end of a day (23:59:59.999)
 * @param date - The date to get the end of
 * @returns The end of the day
 */
export function endOfDay(date: Date): Date {
  if (!date) return new Date();
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}