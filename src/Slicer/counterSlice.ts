import { createSlice } from "@reduxjs/toolkit";

// 状態の型を定義
interface CounterState {
	value: number;
}

// 初期状態を定義
const initialState: CounterState = {
	value: 0,
};

// createSlice: スライスを作成する関数
// name: スライスの名前
// initialState: 初期状態
// reducers: リデューサーの関数
const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
