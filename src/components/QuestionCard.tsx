import React, { FC } from "react";
import { MyConstArrayItem } from "../mock";
import { Card, Space, Button } from "antd";
import {
  EditOutlined,
  LineChartOutlined,
  CopyOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

type props = MyConstArrayItem & {
  onStart: (id: number, isStarted: boolean) => void;
};

const QuestionCard: FC<props> = (props) => {
  const { id, title, isPublished, isStarted, answerCount, createAt, onStart } =
    props;
  const Operation = (
    <div className="flex items-center">
      <Button size="small" className="mr-4">
        {isPublished ? "未发布" : "已发布"}
      </Button>
      <p className="mr-2">答案：{answerCount}</p>
      <p>{createAt}</p>
    </div>
  );
  const onStarted = () => {
    onStart(id, !isStarted);
  };
  return (
    <Space direction="vertical" size="large" className="flex mt-4">
      <Card
        title={title}
        extra={Operation}
        headStyle={{ color: "#6d97ff" }}
        bordered={false}
        hoverable={true}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-wrap">
            <Button type="link" className="flex items-center justify-center">
              <EditOutlined /> 问卷调查
            </Button>
            <Button
              type="link"
              className="text-[#ccc] flex items-center justify-center"
            >
              <LineChartOutlined /> 数据统计
            </Button>
          </div>
          <div className="flex flex-wrap">
            <Button
              type="link"
              className="text-[#ccc] flex items-center justify-center"
              onClick={onStarted}
            >
              {isStarted ? (
                <StarOutlined className="text-[#f3d528]" />
              ) : (
                <StarOutlined />
              )}
              标星
            </Button>
            <Button
              type="link"
              className="text-[#ccc] flex items-center justify-center"
            >
              <CopyOutlined />
              复制
            </Button>
            <Button
              type="link"
              className="text-[#ccc] flex items-center justify-center"
            >
              <DeleteOutlined />
              删除
            </Button>
          </div>
        </div>
      </Card>
    </Space>
  );
};

export default QuestionCard;
