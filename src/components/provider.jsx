"use client";

import { ThemeProvider } from "@material-tailwind/react";

export const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
