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
      400: "#3f3f3f",
      600: "#161616",
      700: "#111",
      800: "#0b0b0b",
    },
    darkblue: {
      200: "#191e3e",
      300: "#13172f",
      400: "#0d0f1f",
      500: "#060810",
      600: "#020305",
      900: "#000000",
    },
    neon: {
      200: "#00FFED",
      300: "#9D00C6",
      400: "#0100EC",
      500: "#FB36F4",
    },
    cpunk: {
      200: "#0c0931",
      300: "#1d1856",
      400: "#e80074",
      500: "#c200db",
      600: "#00cfe5",
    },
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-b, darkblue.600, darkblue.500, darkblue.400)",
        color: "white",
        minHeight: "100vh",
      },
    },
  },
  fonts: {
    heading: "Arima",
    body: "Arima",
  },
});
