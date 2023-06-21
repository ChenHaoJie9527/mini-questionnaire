import React, { FC, useEffect, useRef, useState } from "react";

const CloseurTrap: FC = () => {
  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount(count + 1);
  };
  const countVal = useRef(0);
  useEffect(() => {
    countVal.current = count;
  }, [count]);
  const onAlert = () => {
    // 这里构成闭包陷阱
    // 在异步函数里访问当前函数组件的state，由于异步函数内部保持这对上层作用域函数变量的引用，所以构成闭包
    // 当电机Alert按钮后，就会触发该闭包特性，引用当时的变量，3s结束后显示被引用的变量
    // 如果在3s期间，对当前的state进行修改，那么alert的state也不是最新的
    // 为了解决闭包陷阱，可以使用useRef
    setTimeout(() => {
      //   alert(count);
      alert(countVal.current); // 解决闭包陷阱
    }, 3000);
  };
  return (
    <>
      <h2>闭包陷阱</h2>
      <div>
        <p>{count}</p>
        <button className="border mr-2" onClick={onAdd}>
          add
        </button>
        <button className="border" onClick={onAlert}>
          Alert
        </button>
      </div>
    </>
  );
};

export default CloseurTrap;
