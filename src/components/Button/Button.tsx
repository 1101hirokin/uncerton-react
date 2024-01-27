"use client";
import React, { useMemo } from "react";
import { Modify, buildClassName } from "../../utils";
import styles from "./Button.module.css";
import {
  ClickableContentAppearance,
  createClickableContentCSSVars,
  createClickableContentPalette,
} from "../ContentPalette/ContentPalette";
import { Text, useUncertonContext } from "..";

type ButtonProps = Modify<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  {
    color?: string;
    textColor?: string;
    appearance?: ClickableContentAppearance;
    shape?: "rounded" | "angular" | "circular";
    block?: boolean;
    wrapText?: boolean;

    trailingIcon?: React.ReactNode;
    leadingIcon?: React.ReactNode;
  }
>;

export const Button = ({
  color = "#000",
  textColor,
  appearance = "normal",
  shape = "rounded",
  block,
  children,
  disabled,
  wrapText,
  ...rest
}: ButtonProps) => {
  const dsContext = useUncertonContext();
  const theme = dsContext.getCurrentTheme();

  const cssVars = useMemo(() => {
    const colorPalette = createClickableContentPalette(
      color,
      textColor,
      appearance
    );
    return {
      "--h-button--outline-color": theme.isLight ? "#000" : "#fff",
      ...createClickableContentCSSVars("h-button", colorPalette),
    } as React.CSSProperties;
  }, [color, textColor, appearance, theme.isLight]);

  return (
    <button
      {...rest}
      disabled={disabled}
      className={buildClassName(
        styles.Button,
        (() => {
          switch (shape) {
            case "rounded":
              return styles.rounded;
            case "angular":
              return styles.angular;
            case "circular":
              return styles.circular;
          }
        })(),
        block ? styles.block : null,
        wrapText ? null : styles.noWrapText,
        rest.className
      )}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        ...cssVars,
        ...rest.style,
      }}
    >
      <div
        className={buildClassName(
          styles.layer,
          styles.layer__abs,
          styles.focusOutline
        )}
      ></div>
      <div className={buildClassName(styles.layer, styles.layer__main)}>
        <div className={styles.leadingIcon__container}></div>
        <div className={styles.text__container}>
          <Text className={styles.text} appearance="button">
            {children}
          </Text>
        </div>
        <div className={styles.trailingIcon__container}></div>
      </div>
      <div className={buildClassName(styles.layer, styles.layer__abs)}></div>
    </button>
  );
};
