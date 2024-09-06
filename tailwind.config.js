/** @type {import('tailwindcss').Config} */

import animate from 'tailwindcss-animate';


function textStrokeColor({ addUtilities, theme }) {
  const textStrokeValues = theme("textStroke");
  const colors = theme("colors");

  const textStrokeUtilities = Object.entries(textStrokeValues).reduce(
    (acc, [key, value]) => {
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        acc[`.text-stroke-${key}-${colorName}`] = {
          "-webkit-text-stroke": `${value} ${colorValue}`,
          "text-stroke": `${value} ${colorValue}`, // Para navegadores compatibles
          color: "transparent",
        };
      });
      return acc;
    },
    {}
  );

  addUtilities(textStrokeUtilities, ["responsive", "hover"]);
}

function textShadow({ addUtilities }) {
  addUtilities({
    ".text-shadow": {
      "text-shadow": "2px 2px 4px rgba(0, 0, 0, 1)",
    },
    ".text-shadow-md": {
      "text-shadow": "4px 4px 6px rgba(0, 0, 0, 0.5)",
    },
    ".text-shadow-lg": {
      "text-shadow": "6px 6px 8px rgba(0, 0, 0, 0.5)",
    },
  });
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textShadow: {
      default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      md: "4px 4px 6px rgba(0, 0, 0, 0.5)",
      lg: "6px 6px 8px rgba(0, 0, 0, 0.5)",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Cutive", "serif"],
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cutive: ["Cutive", "serif"],
      },
      width: {
        'custom': '98.71093vw',  // Aquí defines el valor personalizado
      },
      colors: {
        celeste: "#386AA3",//#E6DDCF
        blanco: "#FFFFFF",
        negro: "#000000",
        beige: "#E6DDCF",
        darkceleste: "#B0C6DE",
        gris: "#3C3C3B",
        grisclaro: "#EEEEEE",
        hab: "#575756"

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    textStroke: {
      default: "1px",
      1: "1px",
      2: "2px",
      4: "4px",
    },
  },
  plugins: [textStrokeColor, textShadow, animate],
};
