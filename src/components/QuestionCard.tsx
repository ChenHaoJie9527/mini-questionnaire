import React, { FC } from "react";
import { Card, Space, Button, Tag, Modal, message, Popconfirm } from "antd";
import {
  EditOutlined,
  LineChartOutlined,
  CopyOutlined,
  StarOutlined,
  DeleteOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { PATHNAME } from "../routers/config";
import { QuestionListType } from "../utils";

const { confirm } = Modal;

interface Props extends QuestionListType {
  onStart: (id: string, isStarted: boolean) => void;
}

const QuestionCard: FC<Props> = (props) => {
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
    onStart && onStart(id, !isStarted);
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
  const onCopy = () => {
    message.success("复制成功");
  };
  const onDel = () => {
    confirm({
      title: "确定删除该问卷？",
      icon: <ExclamationOutlined />,
      onOk: () => {
        message.info("删除成功");
      },
    });
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
            <Popconfirm
              title="确定复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={onCopy}
            >
              <Button
                type="link"
                className="text-[#ccc] flex items-center justify-center"
              >
                <CopyOutlined />
                复制
              </Button>
            </Popconfirm>
            <Button
              type="link"
              className="text-[#ccc] flex items-center justify-center"
              onClick={onDel}
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
