import React, { ChangeEvent, FC } from "react";

const Form: FC = () => {
    const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault(); // 阻止默认行为
        // TODO：ajax 发送 form 请求体
    }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" name="k1" value={"v1"} />
        <textarea name="k2" value={"v2"} id="" cols={30} rows={10}></textarea>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
