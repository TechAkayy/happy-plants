/* Pinegrow generated Design Panel Begin */

const pg_colors = {
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  yellow: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  green: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  purple: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  primary: {
    50: "#eef5e2",
    100: "#dcebc2",
    200: "#c9e0a2",
    300: "#b5d582",
    400: "#a1ca61",
    500: "#8cbf3e",
    600: "#749e33",
    700: "#5d7e29",
    800: "#46601f",
    900: "#314316",
  },
  secondary: {
    50: "#dfe7de",
    100: "#bacab7",
    200: "#96ae90",
    300: "#73926b",
    400: "#507748",
    500: "#2d5d26",
    600: "#254d20",
    700: "#1e3e1a",
    800: "#162f14",
    900: "#10210d",
  },
  color3: {
    50: "#fffdfc",
    100: "#fefbf9",
    200: "#fefaf6",
    300: "#fdf8f2",
    400: "#fdf6ef",
    500: "#fcf4ec",
    600: "#d0cac3",
    700: "#a6a19c",
    800: "#7e7a76",
    900: "#585553",
  },
  color4: {
    50: "#e9efeb",
    100: "#cfdcd3",
    200: "#b6c9bb",
    300: "#9db7a4",
    400: "#85a58e",
    500: "#6d9378",
    600: "#5a7a63",
    700: "#48614f",
    800: "#374a3c",
    900: "#26332a",
  },
};

const pg_fonts = {
  sans: ["'Sora', sans-serif"],
  serif: ["'IBM Plex Serif', serif"],
};

const pg_backgrounds = {
  "design-image":
    "url('https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fGluZG9vciUyMHBsYW50fGVufDB8fHx8MTYyNTQzMzc1Ng&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=1360&fit=crop')",
  "design-image-large":
    "url('https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fGluZG9vciUyMHBsYW50fGVufDB8fHx8MTYyNTQzMzc1Ng&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=crop')",
};

/* Pinegrow generated Design Panel End */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      colors: pg_colors,
      fontFamily: pg_fonts,
      backgrounds: pg_backgrounds,
    },
  },

  corePlugins: {
    get preflight() {
      return !process.env.WP;
    },
  },

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    let _content = [
      "./index.html",
      "./src/**/*.{html,vue,svelte,astro,js,cjs,mjs,ts,cts,mts,jsx,tsx,md,mdx}",
      "!./node_modules",
    ];
    return {
      relative: true, // IMPORTANT
      files:
        process.env.NODE_ENV === "production"
          ? _content
          : [..._content, "./_pginfo/**/*.{html,js}"], // used by Vue Desginer for live-designing during development,
    };
  },
};
