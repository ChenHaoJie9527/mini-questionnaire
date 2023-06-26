import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default (pathName: string) => {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState("");
  useEffect(() => {
    const res = searchParams.get(pathName);
    if (res) {
      setParams(res);
    }
  }, [searchParams]);
  return {
    params,
  };
};
