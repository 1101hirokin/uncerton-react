"use client";
import styles from "./List.module.css";
import { Modify, buildClassName } from "../../utils";
import React from "react";
import { Icon, IconName } from "../Icon/Icon";
import { getTextUncertonearanceClassName } from "../Text/Text";

type ListProps = Modify<React.HTMLAttributes<HTMLUListElement>, {}>;
export const List = ({ ...rest }: ListProps) => {
  return <ul {...rest} className={buildClassName(styles.List)} />;
};

type ListItemProps = Modify<
  React.HTMLAttributes<HTMLLIElement>,
  {
    disabled?: boolean;

    icon?: IconName;
    trailing?: React.ReactNode;
    expand?: React.ReactNode;
  }
>;
export const ListItem: React.FC<ListItemProps> = ({
  disabled,
  icon,
  trailing,
  expand,
  ...rest
}: ListItemProps) => {
  const textClassName = getTextUncertonearanceClassName("h1");

  return (
    <li {...rest} className={buildClassName(styles.ListItem, textClassName)}>
      <div className={buildClassName(styles.main_contents_container)}>
        {icon && (
          <div className={styles.icon_container}>
            <Icon name={icon} className={styles.icon} />
          </div>
        )}
        <div className={styles.text_container}>{rest.children}</div>
        <div className={styles.trailing_container}>{trailing}</div>
        {expand && <div className={styles.expand_icon_container}>↓</div>}
      </div>
    </li>
  );
};
