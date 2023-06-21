import { useMemo, useState } from "react";
interface Actions<T> {
  set: (value: T) => void;
  toggle: () => void;
  setLeft: () => void;
  setRight: () => void;
}
function useToggle<T = boolean>(): [boolean, Actions<T>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [T | U, Actions<T | U>];

function useToggle<T, R>(
  defaultValue: T = false as unknown as T,
  reverseValue?: R
) {
  const [state, setState] = useState<T | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === undefined ? !defaultValue : reverseValue
    ) as T | R;

    const toggle = () => {
      setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    };

    const set = (value: T | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []);

  return [state, actions];
}

export default useToggle;
