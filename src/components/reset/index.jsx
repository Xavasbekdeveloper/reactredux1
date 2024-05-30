import React, { memo } from "react";
import { MdRestartAlt } from "react-icons/md";
import { useDispatch } from "react-redux";
import { reset } from "../../context/counter-slice/counterSlice";

const Reset = () => {
  let dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
    // localStorage.removeItem("count");
  };

  return (
    <button onClick={handleReset}>
      <MdRestartAlt />
    </button>
  );
};

export default memo(Reset);
