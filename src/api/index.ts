import { userApi } from "./path/user";
import { createQuestion, getQuestionDataList } from "./path/mange";

export const api = {
  ...userApi,
  createQuestion,
  getQuestionDataList,
};
