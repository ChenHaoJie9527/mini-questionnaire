import { userApi } from "./path/user";
import { createQuestion } from "./path/mange";

export const api = {
  ...userApi,
  createQuestion,
};
