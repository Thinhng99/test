import React, { ReactNode, FC } from "react";
import { Typography } from "antd";
import { BaseType } from "antd/es/typography/Base";

declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];

interface Props {
  type?: BaseType;
  level?: (typeof TITLE_ELE_LIST)[number];
  children: ReactNode;
}

const Title: FC<Props> = ({ type, level, children, ...others }) => {
  return (
    <Typography.Title
      {...others}
      type={type}
      level={level || 3}
      style={{ margin: 0 }}
    >
      {children}
    </Typography.Title>
  );
};

export default Title;
