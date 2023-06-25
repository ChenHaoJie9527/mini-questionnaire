import React, { FC, useState } from "react";
import { statList } from "../../mock";
import { useTitle } from "ahooks";
import Header from "../../components/Header";
import { Empty, Table, Tag } from "antd";

const Trash: FC = () => {
  useTitle("小码问卷 - 回收站");
  const [list] = useState(statList);
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
  return (
    <div className="w-full p-5">
      <Header title="回收站" />
      {list.length === 0 && <Empty description="暂无数据" />}
      {list.length > 0 && (
        <Table
          dataSource={list}
          columns={tableColumns}
          pagination={false}
          rowKey={(item) => item.id}
        />
      )}
      <div>分页...</div>
    </div>
  );
};

export default Trash;
