/**
 * API utility functions for common API operations
 */

/**
 * Default fetch options for API requests
 */
const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Handles API response
 * @param response - The fetch response
 * @returns The parsed response data
 * @throws ApiError if the response is not ok
 */
async function handleResponse(response: Response) {
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    throw new ApiError(
      response.statusText || 'An error occurred',
      response.status,
      data
    );
  }

  return data;
}

/**
 * Makes a GET request to the specified URL
 * @param url - The URL to make the request to
 * @param options - Additional fetch options
 * @returns The parsed response data
 */
export async function get<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: 'GET',
  });
  return handleResponse(response);
}

/**
 * Makes a POST request to the specified URL
 * @param url - The URL to make the request to
 * @param data - The data to send in the request body
 * @param options - Additional fetch options
 * @returns The parsed response data
 */
export async function post<T>(url: string, data: any, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

/**
 * Makes a PUT request to the specified URL
 * @param url - The URL to make the request to
 * @param data - The data to send in the request body
 * @param options - Additional fetch options
 * @returns The parsed response data
 */
export async function put<T>(url: string, data: any, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

/**
 * Makes a DELETE request to the specified URL
 * @param url - The URL to make the request to
 * @param options - Additional fetch options
 * @returns The parsed response data
 */
export async function del<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: 'DELETE',
  });
  return handleResponse(response);
}

/**
 * Makes a request with retry logic
 * @param fetchFn - The fetch function to call
 * @param retries - The number of retries (default: 3)
 * @param delay - The delay between retries in milliseconds (default: 1000)
 * @returns The parsed response data
 */
export async function withRetry<T>(
  fetchFn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fetchFn();
  } catch (error) {
    if (retries <= 0) throw error;
    
    await new Promise(resolve => setTimeout(resolve, delay));
    return withRetry(fetchFn, retries - 1, delay * 2);
  }
}