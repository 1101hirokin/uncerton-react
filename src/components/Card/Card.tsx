import {
  ShapeType,
  Elevation,
  Color,
  getShadowStringByElevation,
} from "../../api";
import React, { useMemo } from "react";
import styles from "./Card.module.css";
import { useUncertonContext } from "../UncertonContext/UncertonContext";
import { Modify, buildClassName } from "../../utils";

type CardProps = Modify<
  React.HTMLAttributes<HTMLDivElement>,
  {
    element?: "div" | "section" | "article" | "aside" | "header" | "footer";
    shape?: ShapeType;
    elevation?: Elevation;
    shadowColor?: string;
    border?: boolean;
  }
>;

export const Card = ({
  element = "div",
  shape,
  shadowColor = "black",
  elevation = 0,
  border = false,

  ...props
}: CardProps) => {
  const appContext = useUncertonContext();
  const theme = appContext.getCurrentTheme();

  const _shape = shape ?? theme.app.shape;

  const shadowStr = useMemo(() => {
    return getShadowStringByElevation(elevation, Color.fromString(shadowColor));
  }, [elevation, shadowColor]);

  const shapeClassName = (() => {
    switch (_shape) {
      case "angular":
        return styles.angular;
      case "rounded":
        return styles.rounded;
      case "circular":
        return styles.circular;
      default:
        return null;
    }
  })();

  const cssVars = {
    "--card--shadow": shadowStr,
    "--card--color": theme.components.textColor,
    "--card--bg-color": theme.components.bgColor,
    "--card--border-color": theme.components.borderColor,
  } as React.CSSProperties;

  return (
    <div
      {...props}
      className={buildClassName(
        styles.Card,
        props.className,
        shapeClassName,
        border && styles.border
      )}
      style={{
        ...props.style,
        ...cssVars,
      }}
    />
  );
};
