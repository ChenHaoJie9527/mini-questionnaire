import React, { FC } from "react";
import { Typography } from "antd";
import ListSearch from "../common/ListSearch";

const { Title } = Typography;

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <Title level={3}>{title}</Title>
      <ListSearch />
    </div>
  );
};

export default Header;
