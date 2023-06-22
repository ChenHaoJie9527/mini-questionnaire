import React, { FC, useState } from "react";
import QuestionCard from "../components/QuestionCard";

const listData = [
  {
    id: 1,
    title: "问卷1",
    isPublished: false,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 2,
    title: "问卷2",
    isPublished: false,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 3,
    title: "问卷3",
    isPublished: true,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 4,
    title: "问卷4",
    isPublished: false,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
];

const List: FC = () => {
  const [questionList, setQuestionList] = useState(listData);
  return (
    <div className="w-full">
      <div>header</div>
      <QuestionCard />
      <div>footer</div>
    </div>
  );
};

export default List;
