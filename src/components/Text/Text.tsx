import { Modify, buildClassName } from "../../utils";
import styles from "./Text.module.css";
import React from "react";

type TextUncertonearance =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "subtitle1"
  | "subtitle2";

export const getTextUncertonearanceClassName = (
  appearance: TextUncertonearance
): string => {
  const classes: string[] = [styles.TextCore];

  switch (appearance) {
    case "h1":
      classes.push(styles.h1);
      break;
    case "h2":
      classes.push(styles.h2);
      break;
    case "h3":
      classes.push(styles.h3);
      break;
    case "h4":
      classes.push(styles.h4);
      break;
    case "h5":
      classes.push(styles.h5);
      break;
    case "h6":
      classes.push(styles.h6);
      break;
    case "body1":
      classes.push(styles.body1);
      break;
    case "body2":
      classes.push(styles.body2);
      break;
    case "caption":
      classes.push(styles.caption);
      break;
    case "button":
      classes.push(styles.button);
      break;
    case "overline":
      classes.push(styles.overline);
      break;
    case "subtitle1":
      classes.push(styles.subtitle1);
      break;
    case "subtitle2":
      classes.push(styles.subtitle2);
      break;
    default:
      classes.push(styles.body1);
      break;
  }

  return buildClassName(classes);
};

type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type TextProps = Modify<
  React.HTMLAttributes<HTMLElement>,
  {
    appearance?: TextUncertonearance;
    element?: TextElement;
    children?: React.ReactNode;
  }
>;
export const Text = ({ appearance, element, ...rest }: TextProps) => {
  const Element = (() => {
    if (element) {
      return element;
    }

    switch (appearance) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      default:
        return "p";
    }
  })();
  const appearanceClassName = getTextUncertonearanceClassName(
    appearance || "body1"
  );

  return (
    <Element
      {...rest}
      className={buildClassName(
        styles.TextComponent,
        appearanceClassName,
        rest.className
      )}
    />
  );
};
