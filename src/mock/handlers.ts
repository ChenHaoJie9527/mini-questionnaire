import { rest } from "msw";

interface LoginBody {
  username: string;
  uid: number;
}

interface LoginResponse {
  username: string;
  firstName: string;
}

function login() {
  /**
   * 响应解析器是一个接受以下参数的函数：
   * req: 有关匹配请求的信息;
   * res: 用于创建模拟响应的功能实用程序
   * ctx: 一组有助于设置状态代码、标头、正文等的函数。
   */
  return rest.post<LoginBody, LoginResponse>(
    "/login",
    async (req, res, ctx) => {
      const { username } = await req.json();
      console.log("username: ", username);
      const result = ctx.json({
        username,
        firstName: "John",
      });
      return res(ctx.status(200), result);
    }
  );
}

function user() {
  /**
   * 响应解析器是一个接受以下参数的函数：
   * req: 有关匹配请求的信息;
   * res: 用于创建模拟响应的功能实用程序
   * ctx: 一组有助于设置状态代码、标头、正文等的函数。
   */
  return rest.get("/user", async (req, res, ctx) => {
    const result = ctx.json({
      username: "admin",
      msg: "success",
      status: 200,
    });

    return res(result);
  });
}

const handles = [login(), user()];
export default handles;
