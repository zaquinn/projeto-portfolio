import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { ShouldRenderProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ShouldRenderProvider>
          <App />
        </ShouldRenderProvider>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
