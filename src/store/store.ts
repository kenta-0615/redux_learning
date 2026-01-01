import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slicer/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// Store自体の型を抽出
export type RootState = ReturnType<typeof store.getState>;
// store.getState: ストアの現在の状態（State）をまるごと返す関数です。
// typeof store.getState: TSの機能で、関数の「型」を取得します。（例：「引数はなしで、Stateのオブジェクトを返す関数である」という情報）
// ReturnType<...>: これが肝です。**「その関数が実行された時に返ってくる値の型」**だけを抽出するTSの便利ツール（ユーティリティ型）です。
// なぜこれが必要なの？
// 手動で interface State { counter: { value: number } } と書くこともできますが、新しく userSlice や postSlice を追加するたびに、型定義も手書きで更新するのは面倒ですし、ミスの元です。
// この1行を書いておけば、configureStore に新しい Reducer を追加した瞬間、RootState の中身も自動で更新されます。

export type AppDispatch = typeof store.dispatch;
// typeof store.dispatch: その関数の型をそのまま抽出します。
// 通常の useDispatch は、基本的なAction（「＋1する」など）しか受け付けない型になっています。
// しかし、実際の開発では Redux Thunk などを使って「APIからデータを取る」といった非同期処理の関数を Dispatch することがよくあります。
// typeof store.dispatch を使うことで、「自分のアプリで使うミドルウェアや拡張機能を含めた、すべての Dispatch のルール」を正確に反映した型が作れます。
