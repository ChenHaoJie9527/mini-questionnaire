import { Pagination } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getSearchParamsKey } from "../hooks/useLoadQuestionDataList";

interface Props {
  total: number;
  current?: number;
}

const ListPagination: FC<Props> = ({ total }) => {
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
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

  return (
    <Pagination
      className="mt-2"
      total={total}
      current={current}
      showTitle={false}
      pageSize={pageSize}
      onChange={onChange}
    />
  );
};

export default ListPagination;
