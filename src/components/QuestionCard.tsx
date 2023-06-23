import React, { FC } from "react";
import { MyConstArrayItem } from "../mock";

type props = MyConstArrayItem;

const QuestionCard: FC<props> = (props) => {
  const { id, title, isPublished, isStarted, answerCount, createAt } = props;
  return (
    <div>
      <p>id: {id}</p>
    </div>
  );
};

export default QuestionCard;
