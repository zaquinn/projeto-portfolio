import { createContext, useState } from "react";

export const RenderContext = createContext("");

export const RenderProvider = ({ children }) => {
  const [shouldRender, setShouldRender] = useState("Home");

  return (
    <RenderContext.Provider value={{ shouldRender, setShouldRender }}>
      {children}
    </RenderContext.Provider>
  );
};

export const ShouldRenderProvider = ({ children }) => (
  <RenderProvider>{children}</RenderProvider>
);
