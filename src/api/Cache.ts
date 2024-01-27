export interface Cache<T> {
  get(key: string): T | undefined;
  set(key: string, value: T): void;
  clear(): void;
}

export class InMemoryCache<T> implements Cache<T> {
  private _cache: { [key: string]: T } = {};

  public get(key: string): T | undefined {
    return this._cache[key];
  }

  public set(key: string, value: T): void {
    this._cache[key] = value;
  }

  public clear(): void {
    this._cache = {};
  }
}

// export class LocalStorageCache<T> implements Cache<T> {
//   private _cache: { [key: string]: T } = {};

//   public get(key: string): T | undefined {
//     if (this._cache[key]) {
//       return this._cache[key];
//     }

//     const value = localStorage.getItem(key);
//     if (value) {
//       this._cache[key] = JSON.parse(value);
//       return this._cache[key];
//     }

//     return undefined;
//   }

//   public set(key: string, value: T): void {
//     this._cache[key] = value;
//     localStorage.setItem(key, JSON.stringify(value));
//   }

//   public clear(): void {
//     this._cache = {};
//     localStorage.clear();
//   }
// }
