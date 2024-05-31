/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {screens:{
      'xs':'550px'
    },
    backgroundImage:{
      'green-bg':" url('./assets/green.jpg')",
      'black-image':"url('./assets/costumerReviewBlackBg.png')"
    }
  },
  },
  plugins: [],
}

