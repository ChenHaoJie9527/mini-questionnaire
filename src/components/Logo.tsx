import React, { FC } from "react";
import { FormOutlined } from "@ant-design/icons";

const Logo: FC = () => {
  return (
    <div className="h-full flex items-center justify-start text-2xl">
      <FormOutlined className="mr-2 text-3xl" /> <span>小码问卷</span>
    </div>
  );
};

export default Logo;
