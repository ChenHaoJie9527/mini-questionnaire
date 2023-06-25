import React, { FC } from "react";
import { Input } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="w-full flex items-center justify-between">
      <Title level={3}>{title}</Title>
      <Search
        name="title"
        placeholder="请输入标题..."
        onSearch={onSearch}
        style={{ width: 200 }}
        allowClear
      />
    </div>
  );
};

export default Header;
