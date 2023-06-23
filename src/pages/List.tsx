import React, { FC, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Header from "../components/Header";
import { listData } from "../mock";

const List: FC = () => {
  const [questionList, setQuestionList] = useState(listData);
  return (
    <div className="w-full bg-[#e4e0e0] p-5">
      <Header />
      {questionList.map((item) => {
        return <QuestionCard {...item} key={item.id} />;
      })}
      <div>footer</div>
    </div>
  );
};

export default List;
