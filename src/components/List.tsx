import React, { FC } from "react";
import QuestionItem from "../common/QuestionItem";

export const List: FC = () => {
  // 列表页
  const questionList = [
    {
      id: 1,
      title: "问卷1",
      isPublished: false,
    },
    {
      id: 2,
      title: "问卷2",
      isPublished: false,
    },
    {
      id: 3,
      title: "问卷3",
      isPublished: true,
    },
    {
      id: 4,
      title: "问卷4",
      isPublished: false,
    },
  ];
  return (
    <div className="App container mx-auto">
      <h1 className="text-center mb-2">问卷列表页</h1>
      <div className="flex items-center flex-col space-y-4">
        {questionList.map((item) => {
          const { id, title, isPublished } = item;
          return (
            <QuestionItem
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
            />
          );
        })}
      </div>
    </div>
  );
};
