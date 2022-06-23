import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      200: "#17f819",
      300: "#11e513",
      400: "#1cd42a",
      500: "#0ec115",
      600: "#0ec115",
    },
    gray: {
      50: "#f6f6f7",
      200: "#d4d4d4",
      300: "#9e9ea7",
      600: "#161616",
      700: "#111",
      800: "#0b0b0b",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "white",
      },
    },
  },
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
});
