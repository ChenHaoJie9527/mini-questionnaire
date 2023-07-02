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
import { useRequest } from "ahooks";
import { PATHNAME } from "../routers/config";
const { Sider, Content } = Layout;

const { createQuestion } = api;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  background: "#cece",
};

const siderStyle: React.CSSProperties = {
  padding: "10px",
  background: "#cece",
};

const MangeLayout: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasPathName = (path: string) => {
    return pathname.startsWith(path) ? "default" : "link";
  };
  const { loading, run: onCreate } = useRequest(createQuestion, {
    manual: true,
    onSuccess(result) {
      if (result) {
        navigate(`${PATHNAME.EDIT}/${result.data.id}`);
      }
    },
  });

  return (
    <Layout hasSider>
      <Sider width={300} style={siderStyle}>
        <div className="flex items-center flex-col">
          <Space direction="vertical">
            <Button
              loading={loading}
              type="default"
              style={{ background: "#fff" }}
              size="large"
              className="flex items-center justify-center text-black"
              onClick={() => onCreate("question", { username: "123", uid: 1 })}
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
      <Content
        style={contentStyle}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MangeLayout;
