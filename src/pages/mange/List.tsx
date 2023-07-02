/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC } from "react";
import QuestionCard from "../../components/QuestionCard";
import Header from "../../components/Header";
import { useTitle } from "ahooks";
import { QuestionListType } from "../../utils";
import { Spin } from "antd";
import useLoadQuestionDataList from "../../hooks/useLoadQuestionDataList";
import { ContextCss } from "../../common/styles";

const List: FC = () => {
  useTitle("小码问卷 - 问卷列表");
  const onStart = (id: string, isStarted: boolean) => {
    console.log(id);
    console.log(isStarted);
  };
  const { data: result, loading } = useLoadQuestionDataList();
  const questionList = result?.data.list ?? [];
  // const total = result?.data.total ?? 0;

  return (
    <div className="w-full p-5">
      <Header title="我的问卷" />
      <div
        style={ContextCss}
        className="scroll-smooth overflow-y-auto scrollbar"
      >
        {loading && (
          <div>
            <Spin />
          </div>
        )}
        {!loading && questionList.length > 0 &&
          questionList.map((item: QuestionListType) => {
            const props = { ...item, onStart };
            return <QuestionCard {...props} key={item.id} />;
          })}
        {/* <div>{total}</div> */}
      </div>
    </div>
  );
};

export default List;
