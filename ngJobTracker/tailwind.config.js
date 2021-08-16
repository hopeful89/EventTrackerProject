const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.css'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: {
          50: "#f2f2f3",
          100: "#e5e6e7",
          200: "#cacdce",
          300: "#b0b3b5",
          400: "#959a9d",
          500: "#7b8184",
          600: "#62676a",
          700: "#4a4d50",
          800: "#313435",
          900: "#181a1b"
        },
        blue: {
          50: "#e5f4ff",
          100: "#cceaff",
          200: "#99d4ff",
          300: "#66bfff",
          400: "#33aaff",
          500: "#0095ff",
          600: "#0077cc",
          700: "#005999",
          800: "#003b66",
          900: "#001e33"
        },
        indigo: {
          50: "#e5e8ff",
          100: "#ccd0ff",
          200: "#99a2ff",
          300: "#6673ff",
          400: "#3344ff",
          500: "#0015ff",
          600: "#0011cc",
          700: "#000d99",
          800: "#000866",
          900: "#000433"
        },
        violet: {
          50: "#f0e5ff",
          100: "#e1ccff",
          200: "#c399ff",
          300: "#a666ff",
          400: "#8833ff",
          500: "#6a00ff",
          600: "#5500cc",
          700: "#400099",
          800: "#2a0066",
          900: "#150033"
        },
        purple: {
          50: "#fde5ff",
          100: "#fbccff",
          200: "#f699ff",
          300: "#f266ff",
          400: "#ee33ff",
          500: "#ea00ff",
          600: "#bb00cc",
          700: "#8c0099",
          800: "#5d0066",
          900: "#2f0033"
        },
        pink: {
          50: "#ffe5f4",
          100: "#ffccea",
          200: "#ff99d5",
          300: "#ff66bf",
          400: "#ff33aa",
          500: "#ff0095",
          600: "#cc0077",
          700: "#990059",
          800: "#66003c",
          900: "#33001e"
        },
        red: {
          50: "#ffe5e8",
          100: "#ffccd0",
          200: "#ff99a1",
          300: "#ff6673",
          400: "#ff3344",
          500: "#ff0015",
          600: "#cc0011",
          700: "#99000d",
          800: "#660008",
          900: "#330004"
        },
        orange: {
          50: "#fff0e5",
          100: "#ffe1cc",
          200: "#ffc499",
          300: "#ffa666",
          400: "#ff8833",
          500: "#ff6a00",
          600: "#cc5500",
          700: "#994000",
          800: "#662b00",
          900: "#331500"
        },
        yellow: {
          50: "#fffde5",
          100: "#fffbcc",
          200: "#fff699",
          300: "#fff266",
          400: "#ffee33",
          500: "#ffea00",
          600: "#ccbb00",
          700: "#998c00",
          800: "#665e00",
          900: "#332f00"
        },
        lime: {
          50: "#f4ffe5",
          100: "#eaffcc",
          200: "#d5ff99",
          300: "#bfff66",
          400: "#aaff33",
          500: "#95ff00",
          600: "#77cc00",
          700: "#599900",
          800: "#3c6600",
          900: "#1e3300"
        },
        green: {
          50: "#e8ffe5",
          100: "#d0ffcc",
          200: "#a2ff99",
          300: "#73ff66",
          400: "#44ff33",
          500: "#15ff00",
          600: "#11cc00",
          700: "#0d9900",
          800: "#096600",
          900: "#043300"
        },
        teal: {
          50: "#e5fff0",
          100: "#ccffe1",
          200: "#99ffc4",
          300: "#66ffa6",
          400: "#33ff88",
          500: "#00ff6a",
          600: "#00cc55",
          700: "#009940",
          800: "#00662b",
          900: "#003315"
        },
        cyan: {
          50: "#e5fffd",
          100: "#ccfffb",
          200: "#99fff7",
          300: "#66fff2",
          400: "#33ffee",
          500: "#00ffea",
          600: "#00ccbb",
          700: "#00998c",
          800: "#00665e",
          900: "#00332f"
        }
      },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },

    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
