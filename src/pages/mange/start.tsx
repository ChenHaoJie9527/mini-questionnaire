import React, { FC, useState } from "react";
import { Empty } from "antd";
import { startList } from "../../mock";
import Header from "../../components/Header";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";

const Start: FC = () => {
  useTitle("小码问卷 - 星标问卷");
  const [list] = useState(startList);
  const onStart = (id: number) => {
    console.log("id", id);
  };
  return (
    <>
      <div
        className="w-full p-5"
        style={{ height: "calc(100vh - 64px - 90px)" }}
      >
        <Header title="星标问卷" />
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((item) => {
            const props = { ...item, onStart };
            return <QuestionCard {...props} key={item.id} />;
          })}
        <div>分页</div>
      </div>
    </>
  );
};

export default Start;
