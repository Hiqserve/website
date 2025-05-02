# HiqServe.com

A modern, responsive website for HiqServe built with Next.js and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 14, React, and TypeScript
- **Responsive Design**: Fully responsive design that works on all devices
- **Component Library**: Reusable UI components for consistent design
- **Utility Functions**: Common utility functions for strings, dates, validation, and API requests
- **Custom Hooks**: Reusable React hooks for common functionality
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance Focused**: Optimized for performance and Core Web Vitals

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/hiqserve.com.git
cd hiqserve.com
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
hiqserve.com/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── blog/       # Blog pages
│   │   ├── case-studies/ # Case studies pages
│   │   ├── contact/    # Contact page
│   │   ├── services/   # Services pages
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── layout/     # Layout components
│   │   ├── sections/   # Page section components
│   │   └── ui/         # UI components
│   ├── hooks/          # Custom React hooks
│   │   ├── useDebounce.ts     # Debounce hooks
│   │   ├── useLocalStorage.ts # LocalStorage hook
│   │   └── useMediaQuery.ts   # Media query hooks
│   └── utils/          # Utility functions
│       ├── apiUtils.ts       # API utilities
│       ├── dateUtils.ts      # Date utilities
│       ├── stringUtils.ts    # String utilities
│       └── validationUtils.ts # Validation utilities
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Utilities

All utilities can be imported from a single file:

```tsx
import { capitalize, formatDate, isValidEmail, get } from '@/utils';
```

### String Utilities

Located in `src/utils/stringUtils.ts`:

- `capitalize(str)`: Capitalizes the first letter of a string
- `truncate(str, length, ellipsis)`: Truncates a string to a specified length
- `toKebabCase(str)`: Converts a string to kebab-case
- `toCamelCase(str)`: Converts a string to camelCase
- `slugify(str)`: Converts a string to a URL-friendly slug

### Date Utilities

Located in `src/utils/dateUtils.ts`:

- `formatDate(date, format)`: Formats a date to a string using the specified format
- `getRelativeTimeString(date)`: Returns a relative time string (e.g., "2 hours ago")
- `addDays(date, days)`: Adds a specified number of days to a date
- `isToday(date)`: Checks if a date is today
- `startOfDay(date)`: Gets the start of a day (midnight)
- `endOfDay(date)`: Gets the end of a day (23:59:59.999)

### Validation Utilities

Located in `src/utils/validationUtils.ts`:

- `isValidEmail(email)`: Validates an email address
- `isValidPassword(password)`: Validates a password
- `isValidPhone(phone)`: Validates a phone number
- `isValidUrl(url)`: Validates a URL
- `isEmpty(str)`: Checks if a string is empty or only contains whitespace
- `isInRange(value, min, max)`: Checks if a value is within a specified range
- `isValidCreditCard(cardNumber)`: Validates a credit card number

### API Utilities

Located in `src/utils/apiUtils.ts`:

- `get(url, options)`: Makes a GET request
- `post(url, data, options)`: Makes a POST request
- `put(url, data, options)`: Makes a PUT request
- `del(url, options)`: Makes a DELETE request
- `withRetry(fetchFn, retries, delay)`: Makes a request with retry logic
- `ApiError`: Custom error class for API errors

## Custom Hooks

All hooks can be imported from a single file:

```tsx
import { useLocalStorage, useMediaQuery, useDebounce } from '@/hooks';
```

### useLocalStorage

Located in `src/hooks/useLocalStorage.ts`:

```tsx
const [value, setValue] = useLocalStorage('key', initialValue);
```

A hook for persisting state in localStorage.

### useMediaQuery

Located in `src/hooks/useMediaQuery.ts`:

```tsx
const isMobile = useIsMobile();
const isTablet = useIsTablet();
const isDesktop = useIsDesktop();
const isDarkMode = useIsDarkMode();
// Or custom query:
const matches = useMediaQuery('(min-width: 768px)');
```

Hooks for responsive design and media queries.

### useDebounce

Located in `src/hooks/useDebounce.ts`:

```tsx
// Debounce a value
const debouncedValue = useDebounce(value, 500);

// Debounce a function
const debouncedFn = useDebouncedCallback(fn, 500);
```

Hooks for debouncing values and functions.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
