/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkResult } from "../../../utils";
import { Post } from "../../server";
const urlSuffix = "/api";

interface Params {
  username: string;
  uid: number;
}

async function createQuestion(url: "question", params: Params) {
  const [err, result] = await Post(`${urlSuffix}/${url}`, params);
  return await checkResult(err, result);
}

export { createQuestion };
