import React, { memo, useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../context/counter-slice/counterSlice";

const Decrement = () => {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.counter.count);
  const [dec, setDec] = useState(1);

  const handleChange = (e) => {
    let newValue = e.target.value;
    setDec(newValue);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="counter__dec">
      <input
        value={dec}
        onChange={handleChange}
        type="number"
        placeholder="0"
      />
      <button
        disabled={count < dec}
        onClick={() => dispatch(decrement(+dec || 1))}
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default memo(Decrement);
