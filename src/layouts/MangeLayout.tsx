import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Space, Button, Divider } from "antd";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { api } from "../api";
const { Sider, Content } = Layout;

const {createQuestion} = api;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  background: "#cece",
};

const siderStyle: React.CSSProperties = {
  padding: "10px",
  background: "#cece"
};

const MangeLayout: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasPathName = (path: string) => {
    return pathname.startsWith(path) ? "default" : "link";
  };
  const onCreate = async () => {
    const result =  await createQuestion("question", {username: '123', uid: 1});
    console.log("result: ", result);
  }
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="flex items-center flex-col">
          <Space direction="vertical">
            <Button
              type="default"
              style={{background: "#fff"}}
              size="large"
              className="flex items-center justify-center text-black"
              onClick={onCreate}
            >
              <PlusOutlined />
              新建问卷
            </Button>
            <Divider />
            <Button
              type={hasPathName("/mange/list")}
              className="flex items-center justify-center text-black"
              onClick={() => navigate({ pathname: "/mange/list" })}
            >
              <BarsOutlined /> 我的问卷
            </Button>
            <Button
              type={hasPathName("/mange/start")}
              className="flex items-center justify-center text-black"
              onClick={() => navigate({ pathname: "/mange/start" })}
            >
              <StarOutlined /> 星标问卷
            </Button>
            <Button
              type={hasPathName("/mange/trash")}
              className="flex items-center justify-center text-black"
              onClick={() => navigate({ pathname: "/mange/trash" })}
            >
              <DeleteOutlined /> 回收站
            </Button>
          </Space>
        </div>
      </Sider>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MangeLayout;
