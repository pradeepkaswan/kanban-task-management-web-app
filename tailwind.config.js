/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			primary: {
				DEFAULT: "#635FC7",
				light: "#A8A4FF",
			},
			error: {
				DEFAULT: "#EA5555",
				light: "#FF9898",
			},
			neutral: {
				100: "#FFFFFF",
				200: "#F4F7FD",
				300: "#E4EBFA",
				400: "#828FA3",
				500: "#3E3F4E",
				600: "#2B2C37",
				700: "#20212C",
				800: "#000112",
			},
		},
		fontFamily: {
			sans: ["Plus Jakarta Sans", "sans-serif"],
		},
		fontSize: {
			"heading-xl": [
				"24px",
				{
					lineHeight: "30px",
					fontWeight: "700",
				},
			],
			"heading-l": [
				"18px",
				{
					lineHeight: "23px",
					fontWeight: "700",
				},
			],
			"heading-m": [
				"15px",
				{
					lineHeight: "19px",
					fontWeight: "700",
				},
			],
			"heading-s": [
				"12px",
				{
					lineHeight: "15px",
					fontWeight: "700",
				},
			],
			"body-l": [
				"13px",
				{
					lineHeight: "23px",
					fontWeight: "500",
				},
			],
			"body-m": [
				"12px",
				{
					lineHeight: "15px",
					fontWeight: "700",
				},
			],
		},
		extend: {},
	},
	plugins: [],
}
