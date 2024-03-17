/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "rgba(130, 143, 163, 0.25)",
        purple: {
          DEFAULT: "rgb(99, 95, 199)",
          hover: "rgb(168, 164, 255)",
          "opacity-10": "rgba(99, 95, 199, 0.1)",
          "opacity-25": "rgba(99, 95, 199, 0.25)",
        },
        black: "rgb(0, 1, 18)",
        white: "rgb(255, 255, 255)",
        grey: {
          light: "rgb(244, 247, 253)",
          medium: {
            DEFAULT: "rgb(130, 143, 163)",
            "opacity-25": "rgba(130, 143, 163, 0.25)",
          },
          dark: "rgb(43, 44, 55)",
          darker: "rgb(32, 33, 44)",
        },
        lines: {
          light: "rgb(228, 235, 250)",
          dark: "rgb(62, 63, 78)",
        },
        red: {
          DEFAULT: "rgb(234, 85, 85)",
          hover: "rgb(255, 152, 152)",
        },
      },
      fontSize: {
        "heading-xl": ["1.5rem", { lineHeight: "1.875rem", fontWeight: "700" }],
        "heading-l": [
          "1.125rem",
          { lineHeight: "1.4375rem", fontWeight: "700" },
        ],
        "heading-m": [
          "0.9375rem",
          { lineHeight: "1.1875rem", fontWeight: "700" },
        ],
        "heading-s": [
          "0.75rem",
          { lineHeight: "0.9375rem", fontWeight: "700" },
        ],
        "body-l": ["0.8125rem", { lineHeight: "1.4375rem", fontWeight: "500" }],
        "body-m": ["0.75rem", { lineHeight: "0.9375rem", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
