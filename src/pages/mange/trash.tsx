import React, { FC, useState } from "react";
import { statList } from "../../mock";
import { useTitle } from "ahooks";
import Header from "../../components/Header";
import { Button, Empty, Space, Table, Tag, Modal } from "antd";
import { ExceptionOutlined } from "@ant-design/icons";

const Trash: FC = () => {
  useTitle("小码问卷 - 回收站");
  const [list] = useState(statList);
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

  return (
    <div className="w-full p-5">
      <Header title="回收站" />
      {list.length === 0 && <Empty description="暂无数据" />}
      {list.length > 0 && (
        <>
          <div className="flex items-start justify-start h-20">
            <Space>
              <Button type="primary" disabled={selectIds.length === 0}>
                回复
              </Button>
              <Button danger disabled={selectIds.length === 0} onClick={onDel}>
                彻底删除
              </Button>
            </Space>
          </div>
          <Table
            dataSource={list}
            columns={tableColumns}
            rowKey={(item) => item.key}
            pagination={false}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
          />
        </>
      )}
      <div>分页...</div>
    </div>
  );
};

export default Trash;
