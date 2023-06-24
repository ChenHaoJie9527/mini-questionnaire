import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header style={headerStyle}>header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>footer</Footer>
    </Layout>
  );
};

export default MainLayout;
