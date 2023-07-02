/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkResult } from "../../../utils";
import { Get, Post } from "../../server";
const urlSuffix = "/api";

interface Params {
  username: string;
  uid: number;
  keywordId: string;
  isStart: boolean;
  isDelete: boolean;
  page: number;
  pageSize: number;
}

type ParamsProps = Partial<Params>;

async function createQuestion(url: "question", params: ParamsProps = {}) {
  const [err, result] = await Post(`${urlSuffix}/${url}`, params);
  return await checkResult(err, result);
}


async function getQuestionDataList(url = "questions", params: ParamsProps = {}) {
  const [err, result] = await Get(`${urlSuffix}/${url}`, params);
  return await checkResult(err, result);
}

export { createQuestion, getQuestionDataList };
