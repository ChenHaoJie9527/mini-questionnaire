import { checkResult } from "../../utils";
import { Get, Post } from "../server";

const urlSuffix = "/api";

export async function getUserInfo(
  url: string,
  query: { name: string; age: number }
) {
  const [err, result] = await Get(
    `${urlSuffix}/${url}?name=${query.name}&age=${query.age}`
  );
  return checkResult(err, result);
}

export async function getUserName(url: string, params: { username: string, uid: number }) {
  const [err, result] = await Post(`${urlSuffix}/${url}`, params);
  const res = checkResult(err, result);
  return res;
}


export const userApi = {
  getUserInfo,
  getUserName,
};
