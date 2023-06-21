import React, { FC } from "react";
import { useToggle } from "../hooks";
const Toggle: FC = () => {
  // 不传初始值，则默认是false
  //   const [state, { set, toggle, setLeft, setRight }] = useToggle();
  const [state, { toggle, set, setLeft, setRight }] = useToggle(
    "Hello",
    "World"
  );
  return (
    // <>
    //   <div>{state ? <p>状态：true</p> : <p>状态：false</p>}</div>
    //   <div>
    //     <button className="border" onClick={toggle}>
    //       Toggle
    //     </button>
    //     <button className="border" onClick={setLeft}>
    //       Toggle False
    //     </button>
    //     <button className="border" onClick={setRight}>
    //       Toggle True
    //     </button>
    //   </div>
    // </>
    <>
      <div>
        <p>Effects：{state}</p>
      </div>
      <div>
        <button
          className="border"
          type="button"
          onClick={() => set("Hello")}
          style={{ margin: "0 8px" }}
        >
          Set Hello
        </button>
        <button
          className="border"
          type="button"
          onClick={() => set("World")}
          style={{ margin: "0 8px" }}
        >
          Set Hello
        </button>
        <button
          className="border"
          type="button"
          onClick={toggle}
          style={{ margin: "0 8px" }}
        >
           Toggle
        </button>
        <button
          className="border"
          type="button"
          onClick={setLeft}
          style={{ margin: "0 8px" }}
        >
          Set Left
        </button>
        <button className="border" type="button" onClick={setRight}>
          Set Right
        </button>
      </div>
    </>
  );
};

export default Toggle;
