import React, { FC, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Header from "../components/Header";
import { listData } from "../mock";

const List: FC = () => {
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
    <div className="w-full bg-[#ece9e9] p-5">
      <Header />
      {questionList.map((item) => {
        const props = { ...item, onStart };
        return <QuestionCard {...props} key={item.id} />;
      })}
      <div>footer</div>
    </div>
  );
};

export default List;
