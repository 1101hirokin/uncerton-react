import { useMemo } from "react";
import { Color, Elevation, getShadowsByElevation } from "../../api";
import { Modify, buildClassName } from "../../utils";
import styles from "./Avatar.module.css";

type AvatarProps = Modify<
  React.HTMLAttributes<HTMLElement>,
  {
    src?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    alt?: React.ImgHTMLAttributes<HTMLImageElement>["alt"];
    elevation?: Elevation;
    shadowColor?: string;
  }
>;

export const Avatar = ({
  children,
  src,
  alt,
  elevation = 0,
  shadowColor = "black",
  ...rest
}: AvatarProps) => {
  const shadowStr = useMemo(() => {
    const shadows = getShadowsByElevation(
      elevation,
      Color.fromString("black"),
      false
    );

    let shadowStr = "";

    for (let i = 0; i < shadows.length; i++) {
      const shadow = shadows[i];
      shadowStr += "drop-shadow(";
      switch (typeof shadow) {
        case "string":
          shadowStr += shadow;
          break;
        case "object":
          shadowStr += `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(${shadow.r}, ${shadow.g}, ${shadow.b}, ${shadow.a})`;
          break;
      }
      shadowStr += ")";
      if (i < shadows.length - 1) {
        shadowStr += " ";
      }
    }

    return shadowStr;
  }, [elevation, shadowColor]);

  const cssVars = {
    "--h-avatar--drop-shadow": shadowStr,
  } as React.CSSProperties;

  return (
    <div
      {...rest}
      className={buildClassName(styles.Avatar)}
      style={{
        ...cssVars,
        ...rest.style,
      }}
    >
      {children}
      <div
        className={buildClassName(
          styles.Avatar__layer,
          styles.layer__abs,
          styles.shadow_target__container
        )}
      >
        <svg
          className={styles.shadow_target}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path d="M200,100c0,66.67-33.33,100-100,100C33.33,200,0,166.67,0,100,0,33.33,33.33,0,100,0c66.67,0,100,33.33,100,100Z" />
        </svg>
      </div>
      <div
        className={buildClassName(
          styles.Avatar__layer,
          styles.layer__rel,
          styles.clip_targets__container
        )}
      >
        <div
          className={buildClassName(
            styles.Avatar__layer,
            styles.layer__rel,
            styles.layer__image
          )}
        >
          <img className={styles.Avatar__image} src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};
