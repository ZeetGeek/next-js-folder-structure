/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    // Tailwind v4 uses CSS-first config, but this file is for ESLint plugin compatibility
};

export default config;
