/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        faq: "url('/assets/photo/faq.webp')",
      }),

      backgroundSize: {
        "size-auto": "auto",
        "size-cover": "cover",
        "size-contain": "contain",
      },
    },
  },
  plugins: [],
}
