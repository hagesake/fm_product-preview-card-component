/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"dark-cyan": "hsl(158, 36%, 37%)",
				"dark-cyan-hover": "#1a4031",
				cream: "hsl(30, 38%, 92%)",
				"very-dark-blue": "hsl(212, 21%, 14%)",
				"dark-grayish-blue": "hsl(228, 12%, 48%)",
				"custom-white": "hsl(0, 0%, 100%)",
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
				Fraunces: ["Fraunces", "serif"],
			},
			screens: {
				"-lg": { max: "1023px" },
			},
		},
	},
	plugins: [],
};
