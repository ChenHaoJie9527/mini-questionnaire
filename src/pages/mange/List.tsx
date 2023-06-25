import React, { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import Header from "../../components/Header";
import { listData } from "../../mock";
import { useTitle } from "ahooks";

const List: FC = () => {
  useTitle("小码问卷 - 问卷列表");
  const [questionList, setQuestionList] = useState(listData);
  const onStart = (id: number, isStarted: boolean) => {
    setQuestionList((list) => {
      return list.map((item) => {
        if (item.id === id) {
          item.isStarted = isStarted;
          return {
            ...item,
          };
        } else {
          return item;
        }
      });
    });
  };
  return (
    <div className="w-full p-5">
      <Header title="我的问卷" />
      {questionList.map((item) => {
        const props = { ...item, onStart };
        return <QuestionCard {...props} key={item.id} />;
      })}
      <div>加载更多......</div>
    </div>
  );
};

export default List;
