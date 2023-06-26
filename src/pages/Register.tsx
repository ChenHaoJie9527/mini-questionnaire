import React, { FC } from "react";
import { homeTheme } from "../themes";
import { Button, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { PATHNAME } from "../routers/config";

const { Title } = Typography;

interface FormData {
  nickname: string;
  password: string;
  username: string
}

const Register: FC = () => {
  const onFinish = (values: FormData) => {
    console.log("Success:", values);
  };
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={homeTheme}
    >
      <Title level={2}>注册新用户</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        style={{ maxWidth: 600, width: 400 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="昵称"
          name="nickname"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="default" htmlType="submit">
              注册
            </Button>
            <Link to={PATHNAME.LOGIN}>已有账户，去登录</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
