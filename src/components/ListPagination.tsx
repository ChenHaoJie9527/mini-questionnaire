import { Pagination } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchParamsKey } from "../hooks/useLoadQuestionDataList";

interface Props {
  total: number;
  current?: number;
}

const ListPagination: FC<Props> = ({ total }) => {
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const page = Number(getSearchParamsKey("page", searchParams)) || 1;
    setCurrent(page);
    const pageSize = Number(getSearchParamsKey("pageSize", searchParams)) || 10;
    setPageSize(pageSize);
  }, [searchParams]);

  return (
    <Pagination
      className="mt-2"
      total={total}
      current={current}
      showTitle={false}
      pageSize={pageSize}
    />
  );
};

export default ListPagination;
