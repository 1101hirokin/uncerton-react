import React from "react";
import { Color } from "../../api";

export type ClickableContentPalette = {
  text: {
    default: string;
    hover: string;
    active: string;
    disabled: string;
  };
  background: {
    default: string;
    hover: string;
    active: string;
    disabled: string;
  };
  border: {
    default: string;
    hover: string;
    active: string;
    disabled: string;
  };
};

export const createClickableContentCSSVars = (
  prefix: string,
  palette: ClickableContentPalette
): React.CSSProperties => {
  return {
    [`--${prefix}--text`]: palette.text.default,
    [`--${prefix}--text--hover`]: palette.text.hover,
    [`--${prefix}--text--active`]: palette.text.active,
    [`--${prefix}--text--disabled`]: palette.text.disabled,
    [`--${prefix}--background`]: palette.background.default,
    [`--${prefix}--background--hover`]: palette.background.hover,
    [`--${prefix}--background--active`]: palette.background.active,
    [`--${prefix}--background--disabled`]: palette.background.disabled,
    [`--${prefix}--border`]: palette.border.default,
    [`--${prefix}--border--hover`]: palette.border.hover,
    [`--${prefix}--border--active`]: palette.border.active,
    [`--${prefix}--border--disabled`]: palette.border.disabled,
  };
};

export type ClickableContentAppearance = "normal" | "outlined" | "text";

export const createClickableContentPalette = (
  baseColor: string,
  textColor?: string,
  appearance: ClickableContentAppearance = "normal"
): ClickableContentPalette => {
  const parsedBaseColor = Color.fromString(baseColor);
  const isParsedBaseColorLight = parsedBaseColor.getLuminance() > 0.5;

  const monoColor = parsedBaseColor.mono();

  const hoverColor = isParsedBaseColorLight
    ? parsedBaseColor.darken(0.25)
    : parsedBaseColor.lighten(0.2);
  const activeColor = isParsedBaseColorLight
    ? parsedBaseColor.darken(0.5)
    : parsedBaseColor.lighten(0.3);

  switch (appearance) {
    case "normal":
      return {
        text: {
          default: textColor
            ? textColor
            : isParsedBaseColorLight
            ? "#000"
            : "#fff",
          hover: textColor
            ? textColor
            : isParsedBaseColorLight
            ? "#000"
            : "#fff",
          active: textColor
            ? textColor
            : isParsedBaseColorLight
            ? "#000"
            : "#fff",
          disabled: textColor
            ? textColor
            : isParsedBaseColorLight
            ? "#000"
            : "#fff",
        },
        background: {
          default: baseColor,
          hover: hoverColor.toString(),
          active: activeColor.toString(),
          disabled: monoColor.toString(),
        },
        border: {
          default: "none",
          hover: "none",
          active: "none",
          disabled: "none",
        },
      };
    case "outlined":
      return {
        text: {
          default: textColor ? textColor : baseColor,
          hover: textColor ? textColor : baseColor,
          active: textColor ? textColor : baseColor,
          disabled: textColor ? textColor : baseColor,
        },
        background: {
          default: parsedBaseColor.alpha(0).toString(),
          hover: hoverColor.alpha(0.3).toString(),
          active: activeColor.alpha(0.44).toString(),
          disabled: monoColor.alpha(0).toString(),
        },
        border: {
          default: `1px solid ${baseColor}`,
          hover: `1px solid ${baseColor}`,
          active: `1px solid ${baseColor}`,
          disabled: `1px solid ${baseColor}`,
        },
      };
    case "text":
      return {
        text: {
          default: textColor ? textColor : baseColor,
          hover: textColor ? textColor : baseColor,
          active: textColor ? textColor : baseColor,
          disabled: textColor ? textColor : baseColor,
        },
        background: {
          default: parsedBaseColor.alpha(0).toString(),
          hover: hoverColor.alpha(0.3).toString(),
          active: activeColor.alpha(0.44).toString(),
          disabled: monoColor.alpha(0).toString(),
        },
        border: {
          default: "none",
          hover: "none",
          active: "none",
          disabled: "none",
        },
      };
  }
};
