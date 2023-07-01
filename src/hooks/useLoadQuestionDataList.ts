import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { getQuestionDataList } from "../api/path/mange";

interface Option {
  isStart: boolean;
  isDelete: boolean;
}

function useLoadQuestionDataList(option: Partial<Option> = {}) {
  const { isStart, isDelete } = option;
  const [searchParams] = useSearchParams();
  const load = async () => {
    const keywordId = searchParams.get("keywordId") || "";
    const result = await getQuestionDataList("questions", {
      keywordId,
      isStart,
      isDelete,
    });
    return result;
  };
  const result = useRequest(load, {
    refreshDeps: [searchParams],
  });
  return {
    ...result,
  };
}

export default useLoadQuestionDataList;
