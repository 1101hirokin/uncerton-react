import clsx from "clsx";

type ClassValue =
  | ClassArray
  | ClassRecord
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassRecord = Record<string, any>;
type ClassArray = ClassValue[];

export function buildClassName(...classes: ClassValue[]): string {
  return clsx(...classes);
}
