

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {

        extend: {
            fontFamily: {
                'primary': ['var(--font-montserrat'],
                'display': ['Oswald'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                //make up and down slow
                'slow-right': 'slowRight 3s infinite',
                'slow-left': 'slowLeft 3s infinite',

            },
            keyframes: {
                slowRight: {
                    '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'ease-in-out' },
                    '50%': { transform: 'translateX(10%)', animationTimingFunction: 'ease-in-out' },
                },
                slowLeft: {
                    '0%, 100%': { transform: 'translateX(-10%)', animationTimingFunction: 'ease-in-out' },
                    '50%': { transform: 'translateY(-10%)', animationTimingFunction: 'ease-in-out' },
                },




            },
        },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: "light",
        darkTheme: "light",
    }
}
