// 액션 타입 선언. as const -> action.type 이 string X => counter/INCREASE 와 같이 실제 문자열 값으로 추론됨
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

// 액션 생성 함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

// 관리할 state 의 상태 선언
type CounterState = {
  count: number;
};

// 초기 상태 선언
const countInitialState: CounterState = {
  count: 0,
};

// 리듀서 선언
function counter(
  state: CounterState = countInitialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counter;
