import React, { ChangeEvent, FC, useState } from "react";

const Checkbox: FC = () => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (checkList.includes(value)) {
      setCheckList((list) => {
        return list.filter((item) => item !== value);
      });
    } else {
      setCheckList(checkList.concat(value));
    }
  };
  return (
    <div className="flex items-center">
      <label htmlFor="beijing">北京</label>
      <input
        type="checkbox"
        id="beijing"
        value="1"
        checked={checkList.includes("1")}
        onChange={onChange}
      />
      <label htmlFor="shanghai">上海</label>
      <input
        type="checkbox"
        id="shanghai"
        value="2"
        checked={checkList.includes("2")}
        onChange={onChange}
      />
      <label htmlFor="hangzhou">杭州</label>
      <input
        type="checkbox"
        id="hangzhou"
        value="3"
        checked={checkList.includes("3")}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
