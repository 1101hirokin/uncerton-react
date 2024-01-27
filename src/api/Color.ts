import chroma from "chroma-js";
import { Cache, InMemoryCache } from "./Cache";

const cache: Cache<Color> = new InMemoryCache();
export class Color {
  private _color: chroma.Color;
  private _r: number;
  private _g: number;
  private _b: number;
  private _a: number;

  constructor(r: number, g: number, b: number, a: number = 1) {
    this._color = chroma(r, g, b, a);
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;
  }

  public static fromString(cssString: string): Color {
    const cached = cache.get(cssString);
    if (cached) {
      return cached;
    }

    try {
      const chromaColor = chroma(cssString).rgba();

      const color = new Color(
        chromaColor[0],
        chromaColor[1],
        chromaColor[2],
        chromaColor[3]
      );
      cache.set(cssString, color);

      return color;
    } catch (e) {
      console.error(`Error parsing color: ${cssString}`);

      return new Color(0, 0, 0, 0);
    }
  }

  public toString(): string {
    return this._color.css();
  }

  public getRGBA(): [number, number, number, number] {
    return [this._r, this._g, this._b, this._a];
  }

  public darken(amount: number): Color {
    const darken = this._color.darken(amount).rgba();

    const color = new Color(darken[0], darken[1], darken[2], darken[3]);
    return color;
  }
  public lighten(amount: number): Color {
    const lighten = this._color.brighten(amount).rgba();

    const color = new Color(lighten[0], lighten[1], lighten[2], lighten[3]);

    return color;
  }
  public alpha(amount: number): Color {
    const alpha = this._color.alpha(amount).rgba();

    const color = new Color(alpha[0], alpha[1], alpha[2], alpha[3]);

    return color;
  }

  public getLuminance(): number {
    return this._color.luminance();
  }

  public mono(): Color {
    const mono = this._color.desaturate(1).rgba();

    const color = new Color(mono[0], mono[1], mono[2], mono[3]);

    return color;
  }
}
