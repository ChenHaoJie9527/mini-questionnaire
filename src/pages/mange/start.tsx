/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { Empty, Spin } from "antd";
import Header from "../../components/Header";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";
import useLoadQuestionDataList from "../../hooks/useLoadQuestionDataList";

const Start: FC = () => {
  useTitle("小码问卷 - 星标问卷");
  const onStart = (id: string) => {
    console.log("id", id);
  };
  const { data: result, loading } = useLoadQuestionDataList({ isStart: true });
  const list = result?.data.list ?? [];
  const total = result?.data.total ?? 0;
  return (
    <>
      <div
        className="w-full p-5"
      >
        <Header title="星标问卷" />
        {loading && (
          <div>
            <Spin />
          </div>
        )}
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((item: any) => {
            const props = { ...item, onStart };
            return <QuestionCard {...props} key={item.id} />;
          })}
        <div>分页 {total}</div>
      </div>
    </>
  );
};

export default Start;
