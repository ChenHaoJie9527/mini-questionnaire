import React, { FC, useEffect } from "react";
import { Button, Checkbox, Form, Input, Space, Typography } from "antd";
import { homeTheme } from "../themes";
import { UserAddOutlined } from "@ant-design/icons";
import { PATHNAME } from "../routers/config";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface FormData {
  username: string;
  password: string;
  remember: boolean;
}

const Login: FC = () => {
  const [form] = Form.useForm(); // 获取Form实例对象
  const onFinish = (values: FormData) => {
    if (values && values.remember) {
      setLocal(values);
    } else {
      removeLocal();
    }
  };
  const setLocal = (values: FormData) => {
    window.localStorage.setItem(
      "userinfo",
      JSON.stringify({
        USERNAME: values.username,
        PASSWORD: values.password,
        REMEMBER: values.remember,
      })
    );
  };
  const removeLocal = () => {
    window.localStorage.removeItem("userinfo");
  };
  const getLocal = () => {
    const res = window.localStorage.getItem("userinfo");
    if (res) {
      return JSON.parse(res);
    } else {
      return {};
    }
  };
  useEffect(() => {
    const result = getLocal();
    if (result) {
      console.log(result);
      form.setFieldsValue({
        username: result.PASSWORD,
        password: result.REMEMBER,
        remember: result.USERNAME,
      });
    }
  }, []);
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={homeTheme}
    >
      <Space>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        <Title level={2}>用户登录</Title>
      </Space>
      <div>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, width: 400 }}
          onFinish={onFinish}
          initialValues={{ remember: true }} // 设置初始值
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
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
