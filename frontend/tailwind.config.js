/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "brand-dark": "#050505",
                "brand-gray": "#1a1a1a",
                "accent-purple": "#7C3AED",
                "accent-pink": "#EC4899",
                "text-light": "#F3F4F6",
                "text-muted": "#9CA3AF",
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"],
                "heading": ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                'hero-glow': "radial-gradient(circle at top left, #2d1b4e 0%, #050505 40%)",
                'btn-gradient': "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
            }
        },
    },
    plugins: [],
}
