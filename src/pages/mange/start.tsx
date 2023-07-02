/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { Empty, Spin } from "antd";
import Header from "../../components/Header";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";
import useLoadQuestionDataList from "../../hooks/useLoadQuestionDataList";
import { ContextCss } from "../../common/styles";

const Start: FC = () => {
  useTitle("小码问卷 - 星标问卷");
  const onStart = (id: string) => {
    console.log("id", id);
  };
  const { data: result, loading } = useLoadQuestionDataList({ isStart: true });
  const list: any[] = result?.data.list ?? [];
  console.log(list);
  return (
    <div className="w-full h-full p-5">
      <Header title="星标问卷" />
      <div
        style={ContextCss}
        className="scroll-smooth overflow-y-auto scrollbar"
      >
        {loading && (
          <div>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {(!loading && list.length > 0) &&
          list.map((item: any) => {
            const props = { ...item, onStart };
            return <QuestionCard {...props} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Start;
