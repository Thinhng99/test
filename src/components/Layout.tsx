import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [pageTitle, setPageTitle] = useState("");
  return (
    <Layout>
      <Layout style={{ height: "100vh", overflow: "auto", paddingBottom: 10 }}>
        <Sider
          theme="dark"
          width={240}
          trigger={null}
          style={{ position: "relative" }}
        >
          <Menu setPageTitle={setPageTitle} />
        </Sider>
        <Layout>
          <Header pageTitle={pageTitle} />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Slider />
      <Footer />
    </Layout>
  );
};

export default MainLayout;
