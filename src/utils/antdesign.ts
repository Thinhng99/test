import type { MenuProps } from "antd";
import { ReactNode, Key } from "react";

type MenuItem = Required<MenuProps>["items"][number];
export function getMenuItem(
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
