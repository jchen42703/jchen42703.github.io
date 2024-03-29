/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "885px",
			// => @media (min-width: 1024px) { ... }

			lg: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [],
};
