/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import Header from "../../components/Header";
import { Button, Empty, Space, Table, Tag, Modal, Spin } from "antd";
import { ExceptionOutlined } from "@ant-design/icons";
import useLoadQuestionDataList from "../../hooks/useLoadQuestionDataList";
import { ContextCss } from "../../common/styles";

const Trash: FC = () => {
  useTitle("小码问卷 - 回收站");
  const [selectIds, setSelectIds] = useState<React.Key[]>([]);
  const tableColumns = [
    {
      title: "标题",
      dataIndex: "title",
      // key: "title", // 循环列的 key 会默认取dataIndex 的值
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag title="未发布" color="default">
            未发布
          </Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
    },
  ];
  const { confirm } = Modal;
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectIds(selectedRowKeys);
    },
  };

  const onDel = () => {
    confirm({
      title: "彻底删除该问卷吗？",
      icon: <ExceptionOutlined />,
      content: "删除以后无法恢复",
      onOk() {
        console.log("删除成功");
      },
    });
  };

  const { data: result, loading } = useLoadQuestionDataList({ isDelete: true });
  const list: any[] = result?.data.list ?? [];

  return (
    <div className="w-11/12 h-full">
      <Header title="回收站" />
      <div className="h-full">
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {!loading && list.length > 0 && (
          <div>
            <div className="flex items-start justify-start h-20">
              <Space>
                <Button type="primary" disabled={selectIds.length === 0}>
                  回复
                </Button>
                <Button
                  danger
                  disabled={selectIds.length === 0}
                  onClick={onDel}
                >
                  彻底删除
                </Button>
              </Space>
            </div>
            <Table
              style={ContextCss}
              className="scroll-smooth overflow-y-auto scrollbar"
              dataSource={list}
              columns={tableColumns}
              rowKey={(item) => item.id}
              pagination={false}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Trash;
