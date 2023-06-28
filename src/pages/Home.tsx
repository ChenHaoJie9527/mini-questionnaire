import React, { FC } from "react";
import { Typography, Button } from "antd";
import { homeTheme } from "../themes";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  return (
    <div style={homeTheme}>
      <div className="flex items-center justify-center flex-col w-full h-full">
        <Title level={3}>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 1000份
        </Paragraph>
        <div>
          <Button type="default" size="large">
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
