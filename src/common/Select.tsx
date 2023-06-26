import React, { ChangeEvent, FC, useState } from "react";

const Select: FC = () => {
  const [selectOpt, setSelectOpt] = useState("java");
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value;
    setSelectOpt(val);
  };
  return (
    <div>
      <select name="" value={selectOpt} id="" onChange={onChange}>
        <option value="java">java</option>
        <option value="react">react</option>
        <option value="js">js</option>
        <option value="css">css</option>
        <option value="vue">vue</option>
      </select>
    </div>
  );
};

export default Select;
