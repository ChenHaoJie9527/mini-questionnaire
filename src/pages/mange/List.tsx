import React, { FC, useState, useEffect } from "react";
import QuestionCard from "../../components/QuestionCard";
import Header from "../../components/Header";
import { useTitle } from "ahooks";
import { getQuestionDataList } from "../../api/path/mange";
import { QuestionListType } from "../../utils";

const List: FC = () => {
  useTitle("小码问卷 - 问卷列表");
  const [questionList, setQuestionList] = useState<QuestionListType[]>([]);
  const onStart = (id: string, isStarted: boolean) => {
    console.log(id);
    console.log(isStarted);
  };
  useEffect(() => {
    async function load() {
      const result = await getQuestionDataList("questions", {});
      console.log(result);
      if (result) {
        setQuestionList(result.data.list);
      }
    }

    load();
  }, []);

  return (
    <div className="w-full p-5">
      <Header title="我的问卷" />
      {questionList.length &&
        questionList.map((item) => {
          const props = { ...item, onStart };
          return <QuestionCard {...props} key={item.id} />;
        })}
      <div>加载更多......</div>
    </div>
  );
};

export default List;
