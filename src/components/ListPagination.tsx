import { Pagination } from "antd";
import React, { FC } from "react";

interface Props {
  total: number;
  current?: number;
}

const ListPagination: FC<Props> = ({ total, current = 1 }) => {
  return (
    <Pagination
      className="mt-2"
      total={total}
      defaultCurrent={current}
      showTitle={false}
    />
  );
};

export default ListPagination;
