import React, { FC, useState } from "react";
import QuestionItem from "../common/QuestionItem";

export const List: FC = () => {
  const [questionList, setQuestionList] = useState([
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
  ]);
  const onAddQuestion = () => {
    setQuestionList([
      ...questionList,
      {
        id: questionList.length + 1,
        title: `问卷${questionList.length + 1}`,
        isPublished: true,
      },
    ]);
  };
  // 列表页
  return (
    <div className="App container mx-auto flex flex-col items-center">
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
      <button className="border p-2 mt-2" onClick={onAddQuestion}>
        添加问卷
      </button>
    </div>
  );
};
