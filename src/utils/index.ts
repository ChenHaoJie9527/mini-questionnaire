import { Random } from "mockjs";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function checkResult(
  err: any,
  result: any
): Promise<Record<string, any>> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

interface ListParams {
  lent: number;
  isDelete?: boolean;
  isStarted?: boolean;
  page?: number;
}

export function getQuestionList(params: ListParams) {
  const list = [];
  const {lent, isDelete = false, isStarted} = params;
  for (let i = 0; i < lent; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStarted,
      answerCount: Random.natural(),
      createAt: Random.datetime(),
      isDelete,
    });
  }
  return list;
}

export type QuestionListType = {
  id: string;
  title: string;
  isPublished: boolean;
  isStarted: boolean;
  answerCount: number;
  createAt: string;
  isDelete: boolean;
  key: string;
};
