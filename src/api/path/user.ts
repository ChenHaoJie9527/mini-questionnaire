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
  console.log(err, result);
  return checkResult(err, result);
}

function checkResult(err: unknown, result: unknown) {
  if (!err && result) {
    return result;
  }
  return null;
}

export const userApi = {
  getUserInfo,
  getUserName,
};
