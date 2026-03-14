// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        // Naya scroll animation yahan add kiya
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.33%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        // Naya scroll animation speed 30 seconds set ki hai
        'infinite-scroll': 'infinite-scroll 8s linear infinite',
      }
    },
  },
}