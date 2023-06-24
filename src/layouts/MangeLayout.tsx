import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const MangeLayout: FC = () => {
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>main left</Sider>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MangeLayout;
