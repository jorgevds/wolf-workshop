module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 5s ease-in-out infinite",
      },
    },
    fontFamily: {
      title: ["Turret Road", "cursive"],
      body: ["Open sans", "sans-serif"],
    },
    colors: {
      blackMuted: "#242424",
      black: "#000",
      purple: "#2d151e",
      purpleBorder: "#cf5f89",
      purpleActive: "#a34b6c",
      burgundy: "#75161e",
      burgundyDark: "#510f15",
      white: "#fff",
      mauve: "#c0a4a1",
      blue: "#3f657c",
      blueDark: "#2e4a5a",
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      translate: ["responsive", "hover", "focus", "active"],
    },
    minHeight: {
      0: "0",
      "1/8": "100px",
      "1/4": "200px",
      "1/2": "50%",
      "3/4": "75%",
      screen: "100vh",
      full: "100%",
    },
    screens: {
      xxl: { max: "2040px" },
      // => @media (max-width: 2040px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      minlg: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      minmd: { min: "640px" },
      // => @media (min-width: 689px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "2rem",
      full: "9999px",
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    plugins: [],
  },
};
