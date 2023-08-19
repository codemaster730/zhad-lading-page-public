/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'whiteGradient': 'linear-gradient(180deg, white, #ffffff00)',
        'sa': `url('assets/imgs/section-bg.png')`
      },
      colors: {
        'green': "#13703B",
        'white': 'white',
        'black': "#1E1E1E",
        'greenLight': "#50B848",
        'orange': "#F6911F",
      },
      fontSize: {
        'sm': '13px',
        'base': '16px',
        'md': '20px',
        'lg': '24px',
        'xl': '36px',
        'xl+': "40px",
        '2xl': '48px',
        '3xl': '64px',
      }
    },
  },
  plugins: [],
}

