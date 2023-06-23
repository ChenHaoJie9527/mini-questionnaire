import React, { FC } from "react";
import { MyConstArrayItem } from "../mock";

type props = MyConstArrayItem;

const QuestionCard: FC<props> = (props) => {
//   const { id, title, isPublished, isStarted, answerCount, createAt } = props;
console.log(props);
  return (
    <div>
      list
    </div>
  );
};

export default QuestionCard;
