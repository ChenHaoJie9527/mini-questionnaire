import React, { FC } from "react";
import { Input } from "antd";

const { Search } = Input;

const Header: FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-2xl font-black">我的问卷</p>
      <Search
        placeholder="请输入标题..."
        onSearch={onSearch}
        style={{ width: 200 }}
        allowClear
      />
    </div>
  );
};

export default Header;
