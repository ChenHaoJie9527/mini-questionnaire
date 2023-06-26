import React, { ChangeEvent, FC, useState } from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { LIST_SEARCH_KEYS } from "../contans";
import useGetSearchParams from "../hooks/useGetSearchParams";

const { Search } = Input;
const ListSearch: FC = () => {
  const [searchVal, setSearchVal] = useState("");
  const { pathname } = useLocation();
  const nav = useNavigate();
  //   const [searchParams] = useSearchParams();
  const onSearch = (value: string) => {
    // 跳转页面 添加参数 /mange/list?keywordId=xxx
    nav({
      pathname,
      search: `${LIST_SEARCH_KEYS.KEYWORDID}=${value}`,
    });
    setSearchVal("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
  };

  // 监听路由变化，获取携带参数
  useGetSearchParams(LIST_SEARCH_KEYS.KEYWORDID);
  return (
    <>
      <Search
        value={searchVal}
        name="title"
        onChange={onChange}
        placeholder="请输入标题..."
        onSearch={onSearch}
        style={{ width: 200 }}
        allowClear
      />
    </>
  );
};

export default ListSearch;
