"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment , decrement } from "./store/count";
export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}
