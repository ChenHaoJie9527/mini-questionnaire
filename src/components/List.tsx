import React, { FC, useState } from "react";
import QuestionItem from "../common/QuestionItem";
import { useImmer } from "../hooks";

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
    const list = useImmer(questionList, (draft) => {
      draft.push({
        id: draft.length + 1,
        title: `问卷${draft.length + 1}`,
        isPublished: true,
      });
    });
    setQuestionList(list);
  };
  const isDel = (id: number) => {
    const list = useImmer(questionList, (draft) => {
      return draft.filter((item) => item.id !== id);
    });
    setQuestionList(list);
  };
  const isPush = (id: number) => {
    const list = useImmer(questionList, (draft) => {
      return draft.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          return {
            ...item,
            isPublished: true,
          };
        }
      });
    });
    setQuestionList(list);
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
              isDel={isDel}
              isPush={isPush}
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
