import React, { FC, useState } from "react";
import { Input } from "antd";
const { Search } = Input;

const ListSearch: FC = () => {
  const [searchVal] = useState("");
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <Search
        value={searchVal}
        name="title"
        placeholder="请输入标题..."
        onSearch={onSearch}
        style={{ width: 200 }}
        allowClear
      />
    </div>
  );
};

export default ListSearch;
