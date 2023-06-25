import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PATHNAME } from "../routers/config";

const UserInfo: FC = () => {
  const nav = useNavigate();
  return (
    <div
      className="text-white text-xl cursor-pointer hover:text-[#4178ff]"
      onClick={() => nav({ pathname: PATHNAME.LOGIN })}
    >
      登录
    </div>
  );
};

export default UserInfo;
