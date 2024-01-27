import { ShapeType } from "./ShapeType";

type ValueWithMouseAction<T = string> = {
  normal: T;
  hover?: T;
  active?: T;
};

export type Theme = {
  isLight: boolean;
  metadata?: { [key: string]: string | number | boolean };
  app: {
    shape: ShapeType;
    bgColor: string;
    textColor: string;
  };
  components: {
    bgColor: string | ValueWithMouseAction<string>;
    textColor: string;
    borderColor: string | ValueWithMouseAction<string>;
  };
  semantic?: {
    info: string;
    success: string;
    warning: string;
    error: string;
  };
};

export const StandardLightTheme: Theme = {
  isLight: true,
  app: {
    shape: "rounded",
    bgColor: "#ffffff",
    textColor: "#1b1b1b",
  },
  components: {
    bgColor: "#fbfbfb",
    textColor: "#1b1b1b",
    borderColor: "#e6e6e6",
  },
};

export const StandardDarkTheme: Theme = {
  isLight: false,
  app: {
    shape: "rounded",
    bgColor: "#1b1b1b",
    textColor: "#ffffff",
  },
  components: {
    bgColor: "#2b2b2b",
    textColor: "#ffffff",
    borderColor: "#3b3b3b",
  },
};
