import React, { FC } from "react";
import { FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to={"/"}>
      <div className="h-full flex items-center justify-start text-2xl cursor-pointer hover:text-[#4178ff]">
        <FormOutlined className="mr-1 text-2xl" /> <span>小码问卷</span>
      </div>
    </Link>
  );
};

export default Logo;
