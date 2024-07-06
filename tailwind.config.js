/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				md: "1.5rem",
			},
		},
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
					letterSpacing: "2.4px",
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
		extend: {
			backgroundImage: {
				"light-gradient":
					"linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.50) 100%)",
				"dark-gradient":
					"linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)",
			},
		},
	},
	plugins: [],
}
