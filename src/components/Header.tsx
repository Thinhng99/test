import React from "react";
import { Dropdown, Space, Avatar, Layout } from "antd";
import Title from "./Title";
import {
  UserOutlined,
  UnlockOutlined,
  ExportOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { getMenuItem } from "../utils/antdesign";

const { Header } = Layout;

interface Props {
  pageTitle: string;
}

const items = [
  getMenuItem("Đổi mật khẩu", "/change-pass", <UnlockOutlined />),
  getMenuItem("Đăng xuất", "/login", <ExportOutlined />),
];

function HeaderBar({ pageTitle }: Props) {
  return (
    <Header className="header">
      <Title level={4}>{pageTitle}</Title>
      <Space style={{ cursor: "pointer", marginLeft: "auto" }}>
        <Avatar size="large" icon={<UserOutlined />} />
        <Dropdown
          menu={{
            items,
          }}
        >
          <Space>
            Thinh Nguyen
            <DownOutlined />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
}

export default HeaderBar;
