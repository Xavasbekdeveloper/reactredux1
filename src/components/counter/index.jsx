import React from "react";
import Increment from "../increment";
import Decrement from "../decrement";
import Reset from "../reset";
import "./counter.scss";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../context/counter-slice/counterSlice";

const Counter = () => {
  let count = useSelector((state) => state.counter.count);
  let dispatch = useDispatch();

  return (
    <section className="counter">
      <h1>Counter App</h1>
      <div className="counter__top">
        <Increment />
        <div className="counter__count">
          {count < 1000000000 ? count : dispatch(reset())}
        </div>
        <Decrement />
      </div>
      <div className="counter__bottom">
        <Reset />
      </div>
    </section>
  );
};

export default Counter;
