/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkResult } from "../../../utils";
import { Post } from "../../server";
const urlSuffix = "/api";

async function createQuestion(
  url: "question",
  params: Record<string, any> = {}
) {
  const [err, result] = await Post(`${urlSuffix}/${url}`, params);
  return checkResult(err, result);
}

export { createQuestion };
