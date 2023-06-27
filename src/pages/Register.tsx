import React, { FC } from "react";
import { homeTheme } from "../themes";
import { Button, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { PATHNAME } from "../routers/config";

const { Title } = Typography;

interface FormData {
  nickname: string;
  password: string;
  username: string;
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
          hasFeedback
          rules={[
            { required: true, message: "请输入用户名" },
            {
              type: "string",
              min: 5,
              max: 20,
              message: "字符长度在 5 - 20 之间",
            },
            {
              pattern: /^\w+$/,
              message: "只能是字母数字下划线",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          hasFeedback
          rules={[
            { required: true, message: "请输入密码" },
            {
              type: "string",
              min: 6,
              max: 18,
              message: "密码长度在 6 - 18 之间",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirm password"
          hasFeedback
          dependencies={['password']} // 依赖 password 选项 即 password 发生变化 会重新触发该输入框的 validator验证
          rules={[
            { required: true, message: "请输入密码" },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                console.log("rule: ", rule);
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("两次密码不一致"));
                }
              },
            }),
          ]}
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
