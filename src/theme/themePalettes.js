import { blue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: blue[600],
    },
    mainColor: "#0b0f19",
    accent: {
      greenish: "#99d1a6",
      purplish: "#a288ec",
      orangish: "#ffa071",
    },
    sidebar: {
      background: "#111827",
      hoverBg: "#172032",
      hoverMobile: "#3f4554",
      textColor: "#949ca9",
    },
    status: {
      red: "#fc424a",
      orange: "#fea73e",
      green: "#22c38f",
    },

    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#F4F7FE",
            paper: "#fff",
          },
          text: {
            primary: "#5f6470",
            secondary: grey[700],
          },
          divider: "rgba(129, 139, 156, 0.1)",
          chatBox: "#dfe5f1",
        }
      : {
          // palette values for dark mode
          background: {
            default: "#0b0f19",
            paper: "#111827",
          },

          text: {
            primary: "#949ca9",
            secondary: "#fff",
          },
          divider: "rgba(82,88,98,0.12)",
          chatBox: "#1b2436",
        }),
  },
});
