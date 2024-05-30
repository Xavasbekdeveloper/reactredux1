import React, { memo, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increment } from "../../context/counter-slice/counterSlice";

const Increment = () => {
  let dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  //   localStorage.setItem("count", dispatch(increment(+value || 1)));

  return (
    <div className="counter__inc">
      <input
        value={value}
        onChange={handleChange}
        type="number"
        placeholder="0"
      />
      <button onClick={() => dispatch(increment(+value || 1))}>
        <FaPlus />
      </button>
    </div>
  );
};

export default memo(Increment);
