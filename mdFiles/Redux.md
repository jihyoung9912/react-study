# Redux

### Redux란 JS 상태관리 라이브러리.

React의 State 관리는 MVC 패턴으로 구성되어 양방향 데이터 흐름을 갖고 있어 데이터 흐름을 제어하는 과정이 복잡하고 불편함 
![Untitled (2)](https://user-images.githubusercontent.com/102154146/220626196-31bcbca3-dfdb-4135-8190-33a48b57a897.png)

—> 단방향 데이터 흐름 특징을 갖는 Redux

MVC와 달리 데이터를 직접 변형시키지 않고 Action만 넘겨준 후 View에서 이뤄진 Action은 반드시 Distpatcher를 거쳐 데이터 변경 진행

view와 model 사이 state 전이를 간편화해주고 기존 흐름에 파악하기 어려웠던 관리에 예측 가능성을 부여하여 더욱 편리한 방법 제시

![Untitled](https://user-images.githubusercontent.com/102154146/220626092-abc6eadf-709f-4e4d-8cce-2b0ff3668496.png)

- Redux는 Flux 패턴 (Action, Dispatcher, Store, View)
    - `view(컴포넌트)`에서 `Dispatch(store에서 주는 state를 바꾸는 함수)`라는 함수를 통해 `action(디스 패치 함수 이름)`이 발동되고 `reducer`에 정의된 로직에 따라 `store의 state`가 변화하고 그 `state`를 쓰는 `view(컴포넌트)`가 변하는 흐름을 따릅니다.
    
- React는 state의 개념이 기본
    - 컴포넌트 내부에 수 많은 state, 함수를 통해 state를 바꿈
    - state는 컴포넌트에 종속되는 것이 당연한 결과지만, Redux는 상태 관리를 컴포넌트 바깥에서!
    - Project RootLevel Store에 state 저장, 모든 컴포넌트는 store를 구독하며 state와, 해당 state를 바꾸는 함수를 전달. 함수를 통해 state를 바꾸면 해당 state를 바라보고 있는 모든 컴포넌트 리렌더링
        - Props 지옥 탈출

### **불변성을 지켜야하는 이유**

- **불변성을 지켜야하는 이유**는 redux는 이전 state와 바뀐 state를 구분하는 방법이 참조값이 바뀌었는지 확인하고, 참조값이 바뀌면, state가 바뀌었다고 redux가 인식하여, 해당 state를 사용하는 컴포넌트에게 리렌더링을 요청하기 때문입니다.
    - 그렇기 때문에, `state.test = action.test`와 같이 직접적으로 state를 변경하면 참조값이 변하지 않아 redux는 값이 바뀌었다고 인식하지 않고 리렌더링 되지 않습니다.
    - `state.test = {...test, action.test}`
    - 또는 `immer`라는 라이브러리를 사용하여 쉽게 불변성을 유지합니다.

- Redux의 함수는 무조건 동기적으로 데이터가 흐름
    - 비동기로 사용자 경험을 높이기 위해 redux-saga

- Redux의 세가지 원칙
    1. Single Source of Truth
        - 동일한 데이터는 항상 같은 곳에서 온다
        - 즉 configureStore로 생성한 store라는 하나뿐인 공간에 데이터 모두가 있다는 의미.
    2. State is read-only
        - setState 메소드로만 상태가 변경했던 것처럼 Action이라는 객체를 통해서만 상태를 변경 가능.
    3. Changes are made with pure functions
        - 변경은 순수함수로만 가능.

- Store - Action - Reducer
- Store
    - 한 애플리케이션당 하나의 스토어
    - 스토어 안에는 현재의 앱 상태, reducer, 내장 함수 등
- Action
    - Action Creator 액션 생성함수를 통해 Action을 만듬.
        - export 키워드를 통해 다른 파일에서 aciton을 불러오기 위함. —> 더욱 쉽게 action 발생
    - 상태에 어떤 변화가 필요할 때, Action을 발생시킴.
    - 앱에서 스토어에 운반할 데이터 (주문서)
    - JS 객체 형식으로 구성
- Reducer
    - 변화를 일으키는 함수, 두가지의 parameter
    - reducer(state, action) —> 현재의 state, action을 받아 이를 참고하여 새로운 state 만들어 반환
        - Action을 Store에 바로 전달하는 것이 아닌, Reducer에 전달
        - 이후 Reducer가 Action을 보고 Store의 상태를 업데이트 하는 것
    - combineReducers → 여러 reducer 하나로 묶어주는 메소드, store에 저장되는 reducer는 오직 1개.
    - Action을 Reducer로 전달하기 위해선 dispatch 메소드 사용 dispatch(action)
    - Dispatch
        - 스토어의 내장 함수. 액션을 발생 시키는 것.
            - action을 파라미터로 전달하여 스토어는 reducer 함수를 실행시킴
        - Action 객체가 dispatch 메소드에 전달
        - dispatch를 통해 reducer 호출
        - reducer는 새로운 store 생성
    - 순서
    1. UI 속 컴포넌트 내에 존재하는 이벤트 호출
    2. 이벤트와 연결된 액션 생성자(함수) 호출
    3. 액션이 reducer로 전달 (이 과정을 dispatch가 담당)
    4. dispatch된 액션에 따라 기존 상태값과 액션을 통해 다음 상태값으로 변화
    5. 렌더링
    

![Untitled (1)](https://user-images.githubusercontent.com/102154146/220626108-eb579226-1315-4662-ae15-3db40adf310f.png)

- Redux vs Context
    - 미들웨어
        - 리덕스에는 미들웨어 개념 존재.
- 장점
    - 예측 가능한 상태 (순수 함수를 사용하기 때문)
        - 순수함수란 반환 값 return이 전달 인자 argument 값에만 의존하는 함수
    - 디버깅에 유리 (redux devtool)
- 단점
    - 러닝 커브가 큼
    - BoilerPlate가 큼

![Redux ToolKit]()
