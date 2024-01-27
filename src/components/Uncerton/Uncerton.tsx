import "./Uncerton.css";
import styles from "./Uncerton.module.css";
import React, { useMemo, useState } from "react";
import {
  UncertonContextProvider,
  useUncertonContext,
} from "../UncertonContext/UncertonContext";
import { StandardDarkTheme, StandardLightTheme, Theme } from "../../api";
import { Modify, buildClassName } from "../../utils";

type UncertonProps = Modify<
  React.HTMLAttributes<HTMLDivElement>,
  {
    themes?: Record<string, Theme>;
  }
>;

export const Uncerton = (p: UncertonProps) => {
  const [currentThemeKey, setCurrentThemeKey] = useState<string>("light");
  const _themes: Record<string, Theme> = {
    light: StandardLightTheme,
    dark: StandardDarkTheme,
    ...p.themes,
  };

  return (
    <UncertonContextProvider
      value={{
        themes: _themes,
        getCurrentTheme: () => {
          return _themes[currentThemeKey] || StandardLightTheme;
        },
        setCurrentTheme: (key) => {
          if (_themes[key]) {
            setCurrentThemeKey(key);
          } else {
            console.error(`Theme ${key} does not exist`);
          }
        },
      }}
    >
      <_Uncerton {...p} />
    </UncertonContextProvider>
  );
};

const _Uncerton = ({ children, themes, ...rest }: UncertonProps) => {
  const appContext = useUncertonContext();
  const currentTheme = appContext.getCurrentTheme();

  const cssVars = useMemo(() => {
    return {
      "--h-app--color--semantic--info": currentTheme.semantic?.info,
      "--h-app--color--semantic--success": currentTheme.semantic?.success,
      "--h-app--color--semantic--warning": currentTheme.semantic?.warning,
      "--h-app--color--semantic--error": currentTheme.semantic?.error,
      "--h-app--color--app--background-color": currentTheme.app.bgColor,
      "--h-app--color--app--color": currentTheme.app.textColor,
      "--h-app--color--component--background-color":
        typeof currentTheme.components.bgColor === "string"
          ? currentTheme.components.bgColor
          : currentTheme.components.bgColor.normal,
      "--h-app--color--component--background-color--hover":
        typeof currentTheme.components.bgColor === "string"
          ? currentTheme.components.bgColor
          : currentTheme.components.bgColor.hover,
      "--h-app--color--component--background-color--active":
        typeof currentTheme.components.bgColor === "string"
          ? currentTheme.components.bgColor
          : currentTheme.components.bgColor.active,
      "--h-app--color--component--color": currentTheme.components.textColor,
      "--h-app--color--component--border-color":
        typeof currentTheme.components.borderColor === "string"
          ? currentTheme.components.borderColor
          : currentTheme.components.borderColor.normal,
      "--h-app--color--component--border-color--hover":
        typeof currentTheme.components.borderColor === "string"
          ? currentTheme.components.borderColor
          : currentTheme.components.borderColor.hover,
      "--h-app--color--component--border-color--active":
        typeof currentTheme.components.borderColor === "string"
          ? currentTheme.components.borderColor
          : currentTheme.components.borderColor.active,
    } as React.CSSProperties;
  }, [currentTheme]);

  return (
    <div
      {...rest}
      className={buildClassName(styles.Uncerton, rest.className)}
      style={{
        ...rest.style,
        ...cssVars,
        color: `var(--h-app--color--app--color)`,
      }}
    >
      <div
        className={buildClassName(
          styles.layer__main,
          styles.layer,
          styles.layer_rel
        )}
      >
        {children}
      </div>
      <div className={buildClassName(styles.layer, styles.layer_fixed)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="0"
          height="0"
        >
          <clipPath id="_h_app__avatar_shape" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.005, 0.005)"
              d="M200,100c0,66.67-33.33,100-100,100C33.33,200,0,166.67,0,100,0,33.33,33.33,0,100,0c66.67,0,100,33.33,100,100Z"
            />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};
