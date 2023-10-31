"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
