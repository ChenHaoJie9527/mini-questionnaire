import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { getQuestionDataList } from "../api/path/mange";

interface Option {
  isStart: boolean;
  isDelete: boolean;
  page: number;
  pageSize: number;
}

type keys = "keywordId" | "pageSize" | "page";

function useLoadQuestionDataList(option: Partial<Option> = {}) {
  const { isStart, isDelete } = option;
  const [searchParams] = useSearchParams();
  const load = async () => {
    const keywordId = getSearchParamsKey("keywordId", searchParams) || "";
    const page = Number(getSearchParamsKey("page", searchParams)) || 1;
    const pageSize = Number(getSearchParamsKey("pageSize", searchParams)) || 10;

    const result = await getQuestionDataList("questions", {
      keywordId,
      isStart,
      isDelete,
      page,
      pageSize,
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

export function getSearchParamsKey(key: keys, searchParams: URLSearchParams) {
  return searchParams.get(key);
}

export default useLoadQuestionDataList;
