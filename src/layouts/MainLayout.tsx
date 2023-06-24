import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  minHeight: '64px',
  paddingInline: 50,
  lineHeight: "64px",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
};

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header style={headerStyle} className="bg-[#001529]">
        MainLayout header
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={footerStyle} className="bg-[#001529]">
        小码问卷 @2023 - present. Created by 小码
      </Footer>
    </Layout>
  );
};

export default MainLayout;
