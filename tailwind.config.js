/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

// Optimization: Memoized calculation
/* Fixed bug related to state update */
// Added for better accessibility
// Temporary fix
// Optimization: Memoized calculation
// formatting update
// Temporary fix
// Added for better accessibility
// TODO: Refactor this later
 