import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  username: string;
  password: string;
}

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(watch("username")); // 观察输入的值 即name为example 的值

  return (
    <div>
      {/* "handleSubmit "将在调用 "onSubmit "之前验证你的输入。 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 通过调用 "register "函数将你的输入注册到钩子中。 */}
        <label htmlFor="username">姓名</label>
        <input
          id="username"
          {...register("username", {
            required: true,
            pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
          })}
        />
        {errors.username && <span className="text-red-700">请输入姓名</span>}

        {/* 包括需要验证或其他标准HTML验证规则的验证 支持正则 */}
        <label htmlFor="password">密码</label>
        <input id="password" {...register("password", { required: true })} />
        {/* 当字段验证失败时，将返回错误  */}
        {errors.password && <span className="text-red-700">请输入密码</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
