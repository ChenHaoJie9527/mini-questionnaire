import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";
import { homeFooterTheme } from "../themes";
const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  minHeight: "64px",
  paddingInline: 50,
  lineHeight: "64px",
};

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header
        style={headerStyle}
        className="bg-[#001529] flex items-center justify-between"
      >
        <Logo />
        <UserInfo />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer
        style={{ ...homeFooterTheme }}
        className="text-black text-center font-bold flex items-center justify-center"
      >
        小码问卷 @2023 - present. Created by 小码
      </Footer>
    </Layout>
  );
};

export default MainLayout;
