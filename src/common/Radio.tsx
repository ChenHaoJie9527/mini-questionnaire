import React, { ChangeEvent, FC, useState } from "react";

const Radio: FC = () => {
  const [gender, setGender] = useState("1");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setGender(val);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="radio1">男生</label>
      <input
        type="radio"
        name="gender"
        id="radio1"
        value="1"
        onChange={onChange}
        checked={gender === "1"}
      />
      <label htmlFor="radio2">女生</label>
      <input
        type="radio"
        name="gender"
        id="radio2"
        value="2"
        onChange={onChange}
        checked={gender === "2"}
      />
    </div>
  );
};

export default Radio;
