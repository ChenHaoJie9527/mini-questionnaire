import React, { FC } from "react";
import { Button, Form, Input, Space, Typography } from "antd";
import { homeTheme } from "../themes";
import { UserAddOutlined } from "@ant-design/icons";
import { PATHNAME } from "../routers/config";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface FormData {
  username: string;
  password: string;
}

const Login: FC = () => {
  const onFinish = (values: FormData) => {
    console.log("Success:", values);
  };
  return (
    <div className="flex items-center justify-center flex-col" style={homeTheme}>
      <Space>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        <Title level={2}>用户登录</Title>
      </Space>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, width: 400 }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="default" htmlType="submit">
                登录
              </Button>
              <Link to={PATHNAME.REGISTER}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
