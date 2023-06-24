import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MangeLayout: FC = () => {
  return (
    <div>
      <div>main left</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MangeLayout;
