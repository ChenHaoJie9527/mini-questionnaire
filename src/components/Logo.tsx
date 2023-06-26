import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PATHNAME } from "../routers/config";
const Logo: FC = () => {
  const nav = useNavigate();
  return (
    <div
      className="h-full flex items-center justify-start text-2xl cursor-pointer hover:text-[#4178ff]"
      onClick={() => nav({ pathname: PATHNAME.HOME })}
    >
      <span>小码问卷</span>
    </div>
  );
};

export default Logo;
