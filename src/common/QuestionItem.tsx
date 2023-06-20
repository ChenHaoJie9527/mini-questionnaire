import React, { FC, useEffect } from "react";

interface Props {
  id: number;
  title: string;
  isPublished: boolean;
  isDel: (id: number) => void;
  isPush: (id: number) => void;
}

const QuestionItem: FC<Props> = (props) => {
  const { id, title, isPublished, isDel, isPush } = props;
  // useEffect(() => {
  //   console.log('questionItem mounted');
  //   return () => {
  //     console.log('questionItem unmounted');
  //   }
  // }, [])

  const onEdit = (id: number) => {
    console.log("edit id: ", id);
  };
  const onDel = (id: number) => {
    isDel(id);
  };
  const onPush = (id: number) => {
    isPush(id);
  };
  return (
    <div
      className="flex items-center p-4 space-x-2 border-b-2 border-t-2"
      key={id}
    >
      <span>{title}</span>
      {isPublished ? (
        <span className="text-green-500">已发布</span>
      ) : (
        <span className="text-red-500">未发布</span>
      )}
      <button className="border p-1" onClick={() => onEdit(id)}>
        编辑问卷
      </button>
      <button className="border p-1" onClick={() => onDel(id)}>
        删除问卷
      </button>
      <button className="border p-1" onClick={() => onPush(id)}>
        发布问卷
      </button>
    </div>
  );
};

export default QuestionItem;
