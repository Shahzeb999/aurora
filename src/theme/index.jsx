import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "16em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const customTheme = extendTheme({
  breakpoints,
  styles: {
    global: props => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        overflowX: "hidden",
        color: props.colorMode === "light" ? "default.dark" : "default.light",
        bg: props.colorMode === "light" ? "#F3F8FF" : "#232323",
        fontFamily: "body",
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    }),
  },
  config: {
    disableTransitionOnChange: false,
  },
  colors: {
    default: {
      light: "#FCFCFC",
      dark: "#232323",
    },
    neutral: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#5a5959",
      700: "#423f3f",
      800: "#2a2525",
      900: "#17080d",
    },
    brand: {
      primary: {
      50: "#e8f0f8",
      100: "#c6d9f2",
      200: "#a4c1eb",
      300: "#82aae5",
      400: "#6092de",
      500: "#3e7bd8",
      },
      secondary: {
        50: "#defef6",
        100: "#b8f5e2",
        200: "#90edcc",
        300: "#65e4b5",
        400: "#3cdd9a",
        500: "#22c38c",
        600: "#169875",
        700: "#0a6c5a",
        800: "#00423b",
        900: "#001812",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto Mono', sans-serif`,
  },
});

export default customTheme;
