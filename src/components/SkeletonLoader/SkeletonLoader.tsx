"use client";
import { Modify, buildClassName } from "../../utils";
import styles from "./SkeletonLoader.module.css";
import React from "react";

type SkeletonLoaderProps = Modify<React.HTMLAttributes<HTMLElement>, {}>;

type BlockSkeletonLoaderProps = SkeletonLoaderProps & {};
export const BlockSkeletonLoader = ({ ...rest }: BlockSkeletonLoaderProps) => {
  return (
    <div
      {...rest}
      className={buildClassName(
        styles.SkeletonLoader,
        styles.block,
        rest.className
      )}
    />
  );
};

type TextSkeletonLoaderProps = SkeletonLoaderProps & {};
export const TextSkeletonLoader: React.FC<TextSkeletonLoaderProps> = ({
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={buildClassName(
        styles.SkeletonLoader,
        styles.text,
        rest.className
      )}
    />
  );
};
