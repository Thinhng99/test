import { Button as ButtonAntd, ButtonProps } from "antd";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import { ActionType } from "../types";

interface Props extends ButtonProps {
  action?: ActionType;
}

const iconTypes = {
  search: <SearchOutlined />,
  reset: <SyncOutlined />,
};

const Button = ({ children, type, action, size, style, ...others }: Props) => {
  return (
    <ButtonAntd
      {...others}
      type={type || "primary"}
      size={size || "large"}
      icon={action && iconTypes[action]}
      style={{
        ...style,
      }}
    >
      {children}
    </ButtonAntd>
  );
};

export default Button;
