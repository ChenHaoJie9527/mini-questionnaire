/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import Header from "../../components/Header";
import { useTitle } from "ahooks";
import { QuestionListType } from "../../utils";
import { Spin } from "antd";
import { ContextCss } from "../../common/styles";

const List: FC = () => {
  useTitle("小码问卷 - 问卷列表");
  const onStart = (id: string, isStarted: boolean) => {
    console.log(id);
    console.log(isStarted);
  };
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [total, setTotal] = useState(0);
  const haveMoreData = total > questionList.length;

  // 触发加载
  const tryLoadMore = () => {
    console.log("滚动加载");
  };

  // 当页面加载，或者 url 参数 变化时 触发加载
  useEffect(() => {
    tryLoadMore();
  }, [searchParams]);

  // 当页面滚动时，触发加载
  useEffect(() => {
    // if (haveMoreData) {
    //   window.addEventListener("scroll", tryLoadMore);
    // }
    window.addEventListener("scroll", tryLoadMore);
    return () => {
      window.removeEventListener("scroll", tryLoadMore);
    };
  }, [searchParams]);

  return (
    <div className="w-11/12 p-5">
      <Header title="我的问卷" />
      <div
        style={ContextCss}
        className="scroll-smooth overflow-y-auto scrollbar"
      >
        {/* {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Spin />
          </div>
        )} */}
        <div className="h-[3000px]"></div>
        {
          questionList.length > 0 &&
          questionList.map((item: QuestionListType) => {
            const props = { ...item, onStart };
            return <QuestionCard {...props} key={item.id} />;
          })}
      </div>
      <div className="text-black">上滑加载更多...</div>
    </div>
  );
};

export default List;
