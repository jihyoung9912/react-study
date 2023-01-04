import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

// 루트 리듀서의 반환값를 유추
// 추후 Container Component 에서 불러올 예정
export type RootState = ReturnType<typeof rootReducer>;
