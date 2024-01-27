import { Color } from "..";

export type Elevation =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

type Shadow = {
  x: number;
  y: number;
  blur: number;
  spread?: number;
  r: number;
  g: number;
  b: number;
  a: number;
};

export const getShadowsByElevation = (
  elevation: Elevation,
  color: Color,
  useSpreadRadius: boolean = true
): (Shadow | string)[] => {
  const colorRGBA = color.getRGBA();
  switch (elevation) {
    case 0:
      return [
        {
          x: 0,
          y: 0,
          blur: 0,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0,
        },
        {
          x: 0,
          y: 0,
          blur: 0,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0,
        },
      ];
    case 1:
      return [
        {
          x: 0,
          y: 0.4,
          blur: 1.8,
          spread: useSpreadRadius ? -0.17 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.08,
          blur: 0.24,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 2:
      return [
        {
          x: 0,
          y: 1,
          blur: 1.86,
          spread: useSpreadRadius ? -0.34 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.16,
          blur: 0.33,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 3:
      return [
        {
          x: 0,
          y: 1.2,
          blur: 2.14,
          spread: useSpreadRadius ? -0.5 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.2,
          blur: 0.5,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 4:
      return [
        {
          x: 0,
          y: 2,
          blur: 2.3,
          spread: useSpreadRadius ? -0.67 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.28,
          blur: 0.66,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 5:
      return [
        {
          x: 0,
          y: 3,
          blur: 2.5,
          spread: useSpreadRadius ? -0.84 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.32,
          blur: 0.83,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 6:
      return [
        {
          x: 0,
          y: 3.66,
          blur: 3,
          spread: useSpreadRadius ? -1 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.48,
          blur: 1,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 7:
      return [
        {
          x: 0,
          y: 4.2,
          blur: 3.5,
          spread: useSpreadRadius ? -1.17 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.58,
          blur: 1.16,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 8:
      return [
        {
          x: 0,
          y: 4.8,
          blur: 4,
          spread: useSpreadRadius ? -1.34 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.66,
          blur: 1.33,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 9:
      return [
        {
          x: 0,
          y: 5.33,
          blur: 4.5,
          spread: useSpreadRadius ? -1.5 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.75,
          blur: 1.5,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 10:
      return [
        {
          x: 0,
          y: 5.66,
          blur: 5,
          spread: useSpreadRadius ? -1.67 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.83,
          blur: 1.66,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 11:
      return [
        {
          x: 0,
          y: 7.33,
          blur: 5.5,
          spread: useSpreadRadius ? -1.84 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 0.91,
          blur: 1.83,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 12:
      return [
        {
          x: 0,
          y: 8,
          blur: 6,
          spread: useSpreadRadius ? -2 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1,
          blur: 2,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 13:
      return [
        {
          x: 0,
          y: 8.66,
          blur: 6.5,
          spread: useSpreadRadius ? -2.17 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.08,
          blur: 2.16,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 14:
      return [
        {
          x: 0,
          y: 9.33,
          blur: 7,
          spread: useSpreadRadius ? -2.34 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.16,
          blur: 2.33,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 15:
      return [
        {
          x: 0,
          y: 10,
          blur: 7.5,
          spread: useSpreadRadius ? -2.5 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.25,
          blur: 2.5,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 16:
      return [
        {
          x: 0,
          y: 10.66,
          blur: 8,
          spread: useSpreadRadius ? -2.67 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.33,
          blur: 2.66,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 17:
      return [
        {
          x: 0,
          y: 11.33,
          blur: 8.5,
          spread: useSpreadRadius ? -2.84 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.41,
          blur: 2.83,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 18:
      return [
        {
          x: 0,
          y: 12,
          blur: 9,
          spread: useSpreadRadius ? -3 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.5,
          blur: 3,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 19:
      return [
        {
          x: 0,
          y: 12.66,
          blur: 9.5,
          spread: useSpreadRadius ? -3.17 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.58,
          blur: 3.16,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 20:
      return [
        {
          x: 0,
          y: 13.33,
          blur: 10,
          spread: useSpreadRadius ? -3.34 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.66,
          blur: 3.33,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 21:
      return [
        {
          x: 0,
          y: 14,
          blur: 10.5,
          spread: useSpreadRadius ? -3.5 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.75,
          blur: 3.5,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 22:
      return [
        {
          x: 0,
          y: 14.66,
          blur: 11,
          spread: useSpreadRadius ? -3.67 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.83,
          blur: 3.66,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 23:
      return [
        {
          x: 0,
          y: 15.33,
          blur: 11.5,
          spread: useSpreadRadius ? -3.84 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 1.91,
          blur: 3.83,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    case 24:
      return [
        {
          x: 0,
          y: 16,
          blur: 12,
          spread: useSpreadRadius ? -4 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
        {
          x: 0,
          y: 2,
          blur: 4,
          spread: useSpreadRadius ? 0 : undefined,
          r: colorRGBA[0],
          g: colorRGBA[1],
          b: colorRGBA[2],
          a: 0.24,
        },
      ];
    default:
      return ["none"];
  }
};

const convertShadowToString = (shadow: Shadow): string => {
  if (shadow.spread) {
    return `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(${shadow.r}, ${shadow.g}, ${shadow.b}, ${shadow.a})`;
  }
  return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px rgba(${shadow.r}, ${shadow.g}, ${shadow.b}, ${shadow.a})`;
};

export const getShadowStringByElevation = (
  elevation: Elevation,
  color: Color,
  useSpreadRadius: boolean = true
): string => {
  const shadows = getShadowsByElevation(elevation, color, useSpreadRadius);
  let result = "";
  shadows.forEach((shadow, index) => {
    switch (typeof shadow) {
      case "string":
        result += shadow;
        break;
      case "object":
        result += convertShadowToString(shadow);
        break;
    }
    if (index !== shadows.length - 1) {
      result += ", ";
    }
  });
  return result;
};
