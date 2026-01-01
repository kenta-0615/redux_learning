import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./store/store";
import { increment, decrement } from "./Slicer/counterSlice";

function App() {
  // useSelector: ストアの状態を取得するためのフック
  // useDispatch: ストアのディスパッチ関数を取得するためのフック
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Counter</h1>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
}

export default App;
