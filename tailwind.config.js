/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 5s ease infinite',
        'ball-animation-one': 'ball-animation-one 5s linear infinite',
        'ball-animation-two': 'ball-animation-two 5s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marqueanimation: {
          '0%': { transform: "translate(0)" },
          '100%': { transform: "translate(-100%)"}
        }
      },
    },
  },
}

