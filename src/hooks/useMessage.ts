import { message as antdMessage } from "antd";


const useMessage = (type: "error" | "success" | "warning", content: string) => {
  antdMessage.open({
    type,
    content,
  });
};

export default useMessage;
