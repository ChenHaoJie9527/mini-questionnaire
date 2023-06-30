import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { getQuestionDataList } from "../api/path/mange";

function useLoadQuestionDataList() {
  const [searchParams] = useSearchParams();
  const load = async () => {
    const keywordId = searchParams.get("keywordId") || "";
    const result = await getQuestionDataList("questions", { keywordId });
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
