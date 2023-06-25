import React, { FC } from "react";
import { MyConstArrayItem } from "../mock";
import { Card, Space, Button, Tag } from "antd";
import {
  EditOutlined,
  LineChartOutlined,
  CopyOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { PATHNAME } from "../routers/config";

type props = MyConstArrayItem & {
  onStart: (id: number, isStarted: boolean) => void;
};

const QuestionCard: FC<props> = (props) => {
  const nav = useNavigate();
  const { id, title, isPublished, isStarted, answerCount, createAt, onStart } =
    props;
  const Operation = (
    <div className="flex items-center">
      {isPublished ? (
        <Tag color="processing">已发布</Tag>
      ) : (
        <Tag color="default">未发布</Tag>
      )}
      <p className="mr-2">答案：{answerCount}</p>
      <p>{createAt}</p>
    </div>
  );
  const onStarted = () => {
    onStart(id, !isStarted);
  };
  const Title = () => {
    return (
      <Link
        to={isPublished ? `${PATHNAME.STAT}/${id}` : `${PATHNAME.EDIT}/${id}`}
      >
        <Space>
          {isStarted && <StarOutlined style={{ color: "#f3d528" }} />}
          {title}
        </Space>
      </Link>
    );
  };
  return (
    <Space direction="vertical" size="large" className="flex mt-4">
      <Card
        title={<Title />}
        extra={Operation}
        headStyle={{ color: "#6d97ff", textAlign: "left" }}
        bordered={false}
        hoverable={true}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-wrap">
            <Button
              type="link"
              className="flex items-center justify-center"
              onClick={() => nav(`${PATHNAME.EDIT}/${id}`)}
            >
              <EditOutlined /> 问卷调查
            </Button>
            <Button
              type="link"
              className="text-[#ccc] flex items-center justify-center"
              disabled={!isPublished}
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
              {isStarted ? "取消标星" : "标星"}
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
