// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import { getSearchParamsKey } from "./useLoadQuestionDataList";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const usePaginationToSearchParams = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchParams] = useSearchParams();
  const nav = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const page = Number(getSearchParamsKey("page", searchParams)) || 1;
    setCurrent(page);
    const pageSize = Number(getSearchParamsKey("pageSize", searchParams)) || 10;
    setPageSize(pageSize);
  }, [searchParams]);

  const onChange = (page: number, pageSize: number) => {
    searchParams.set("page", page.toString());
    searchParams.set("pageSize", pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(), // 添加路由url参数 page=1&pageSize=2
    });
  };
  return {
    current,
    pageSize,
    onChange,
  };
};

export default usePaginationToSearchParams;
