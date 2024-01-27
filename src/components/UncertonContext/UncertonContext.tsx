"use client";
import { Theme } from "../../api";
import { createContext, useContext } from "react";

type UncertonContextType = {
  themes: Record<string, Theme>;
  getCurrentTheme: () => Theme;
  setCurrentTheme: (key: string) => void;
};
const UncertonContextDefaultValue: UncertonContextType = {
  themes: {},
  getCurrentTheme: () => {
    throw new Error("Uncerton has not been initialized yet");
  },
  setCurrentTheme: () => {
    throw new Error("Uncerton has not been initialized yet");
  },
};

const UncertonContext = createContext<UncertonContextType>(
  UncertonContextDefaultValue
);

const UncertonContextProvider = UncertonContext.Provider;
const useUncertonContext = () => useContext(UncertonContext);

export { UncertonContextProvider, useUncertonContext };
