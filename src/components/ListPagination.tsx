import { Pagination } from "antd";
import React, { FC } from "react";
import usePaginationToSearchParams from "../hooks/usePaginationToSearchParams";

interface Props {
  total: number;
  current?: number;
}

const ListPagination: FC<Props> = ({ total }) => {
  const { current, pageSize, onChange } = usePaginationToSearchParams();

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
