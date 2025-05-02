/**
 * String utility functions for common string operations
 */

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 * @param str - The string to truncate
 * @param length - The maximum length of the string
 * @param ellipsis - The ellipsis to add (default: '...')
 * @returns The truncated string
 */
export function truncate(str: string, length: number, ellipsis = '...'): string {
  if (!str) return '';
  if (str.length <= length) return str;
  return str.slice(0, length) + ellipsis;
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-case string
 */
export function toKebabCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns The camelCase string
 */
export function toCamelCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
}

/**
 * Slugifies a string (converts to lowercase, replaces spaces with hyphens, removes special characters)
 * @param str - The string to slugify
 * @returns The slugified string
 */
export function slugify(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}