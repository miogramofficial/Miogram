// frontend/styles/theme.ts

export const theme = {
  colors: {
    background: "#090B12",
    surface: "#121624",
    card: "#1A2033",

    primary: "#4F7CFF",
    accent: "#7C4DFF",

    success: "#21C87A",
    warning: "#FFB020",
    error: "#FF4D6D",

    text: {
      primary: "#FFFFFF",
      secondary: "#A8B0C5",
    },
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    xl: "28px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
  },

  typography: {
    display: "48px",
    heading: "36px",
    title: "28px",
    body: "16px",
    caption: "14px",
    tiny: "12px",
  },

  shadow: {
    soft: "0 4px 12px rgba(0,0,0,0.15)",
    medium: "0 8px 24px rgba(0,0,0,0.25)",
    large: "0 16px 48px rgba(0,0,0,0.35)",
  },
} as const;

export type Theme = typeof theme;