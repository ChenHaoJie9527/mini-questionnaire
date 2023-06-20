import { Draft, produce } from "immer";

function useImmer<T>(state: T, fn: (draft: Draft<T>) => void) {
  return produce(state, (draft) => {
    return fn(draft);
  });
}
export default useImmer;
