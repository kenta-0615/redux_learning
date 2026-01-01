import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

// useAppDispatch: Dispatch関数の型を正確に反映したカスタムフック
// useDispatch<AppDispatch>: useDispatch を呼び出すときに、AppDispatch 型を指定しています。
// これは、通常の useDispatch が基本的な Action しか受け付けない型になっているので、Redux Thunk などを使った非同期処理の Dispatch を正確に反映するためです。
// useAppSelector: Selector関数の型を正確に反映したカスタムフック
// useSelector: useSelector を呼び出すときに、RootState 型を指定しています。
// これは、通常の useSelector が State の一部しか受け付けない型になっているので、State の全貌を正確に反映するためです。
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
