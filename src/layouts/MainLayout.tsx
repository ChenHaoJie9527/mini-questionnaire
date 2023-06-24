import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <div>header</div>
      <div>
        {/* 类似 Vue slot */}
        <Outlet />
      </div>
      <div>footer</div>
    </>
  );
};

export default MainLayout;
