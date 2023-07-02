/* eslint-disable @typescript-eslint/no-explicit-any */
import { rest } from "msw";
import { Random } from "mockjs";
import { getQuestionList } from "../utils";

interface LoginBody {
  username: string;
  password: number;
}

interface LoginResponse {
  code: number;
  token: string;
}

// 登录
function login() {
  /**
   * 响应解析器是一个接受以下参数的函数：
   * req: 有关匹配请求的信息;
   * res: 用于创建模拟响应的功能实用程序
   * ctx: 一组有助于设置状态代码、标头、正文等的函数。
   */
  return rest.post("/api/login", async (req, res, ctx) => {
    const { username, password } = await req.json<LoginBody>();
    if (username === "admin" && password) {
      const result = ctx.json<LoginResponse>({
        code: 0,
        token: "xxx",
      });
      return res(ctx.status(200), result);
    } else {
      const result = ctx.json({
        status: 400,
        message: "账号密码不正确",
      });
      return res(ctx.status(200), result);
    }
  });
}

interface RegisterBody {
  username: string;
  password: number;
}

interface RegisterResponse {
  code: number;
}

// 注册
function register() {
  /**
   * 响应解析器是一个接受以下参数的函数：
   * req: 有关匹配请求的信息;
   * res: 用于创建模拟响应的功能实用程序
   * ctx: 一组有助于设置状态代码、标头、正文等的函数。
   */
  return rest.post("/api/register", async (req, res, ctx) => {
    const { username, password } = await req.json<RegisterBody>();
    if (username && password) {
      const result = ctx.json<RegisterResponse>({
        code: 0,
      });
      return res(ctx.status(200), result);
    } else {
      const result = ctx.json<RegisterResponse>({
        code: 1001,
      });
      return res(ctx.status(400), result);
    }
  });
}

interface UserinfoResponse {
  code: number;
  message: string;
  data: Record<string, any>;
}
// 获取用户信息
function userInfo() {
  return rest.get("/api/user", async (req, res, ctx) => {
    const result = ctx.json<UserinfoResponse>({
      message: "ok",
      code: 0,
      data: {},
    });
    return res(result);
  });
}

// -------------- 问卷功能 ---------------

// 创建问卷
interface CreateResponse {
  code: number;
  data: {
    id: string;
  };
}
function createQuestionnaire() {
  return rest.post("/api/question", async (req, res, ctx) => {
    const result = ctx.json<CreateResponse>({
      code: 0,
      data: {
        id: Random.id(),
      },
    });
    return res(result);
  });
}

// 获取单个问卷
interface SingleQuestionResponse {
  code: number;
  data: {
    id: number;
    title: string;
    list: any[];
  };
}
function getSingleQuestionnaire() {
  return rest.get("/api/question/:id", async (req, res, ctx) => {
    const result = ctx.json<SingleQuestionResponse>({
      code: 0,
      data: {
        id: 1,
        title: "问卷1",
        list: [],
      },
    });
    return res(result);
  });
}

// 获取问卷列表
interface QuestionListResponse {
  code: number;
  data: {
    list: any[];
    total: number;
  };
}
function questionList() {
  return rest.get("/api/questions", async (req, res, ctx) => {
    const { url } = req;
    const isDelete = url.search.includes("isDelete=true");
    const isStarted = url.search.includes("isStart=true");
    const result = ctx.json<QuestionListResponse>({
      code: 0,
      data: {
        list: getQuestionList(10, isDelete, isStarted),
        total: 100,
      },
    });
    return res(result);
  });
}

// 更新问卷信息
interface UpdateQuestion {
  code: number;
}
function updateQuestion() {
  return rest.patch("/api/question/:id", async (req, res, ctx) => {
    const result = ctx.json<UpdateQuestion>({
      code: 0,
    });
    return res(result);
  });
}

// 批量彻底删除问卷
interface DeleteBody {
  ids: number;
}

interface DeleteResponse {
  code: number;
}
function deleteQuestions() {
  return rest.delete("/api/questions", async (req, res, ctx) => {
    const { ids } = await req.json<DeleteBody>();
    if (ids) {
      const result = ctx.json<DeleteResponse>({
        code: 0,
      });
      return res(result);
    }
  });
}

const handles = [
  login(),
  register(),
  userInfo(),
  createQuestionnaire(),
  getSingleQuestionnaire(),
  questionList(),
  updateQuestion(),
  deleteQuestions(),
];
export default handles;
