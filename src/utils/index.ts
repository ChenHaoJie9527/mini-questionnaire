import { Random } from "mockjs";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function checkResult(
  err: any,
  result: any
): Promise<Record<string, any> | null> {
  if (!err && result) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  }
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
}

export function getQuestionList(lent: number) {
  const list = [];
  for (let i = 0; i < lent; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStarted: Random.boolean(),
      answerCount: Random.natural(),
      createAt: "3月10日 13:23",
    });
  }
  return list;
}
