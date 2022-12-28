# Redux

### Redux란 JS 상태관리 라이브러리.

React의 State 관리는 MVC 패턴으로 구성되어 양방향 데이터 흐름을 갖고 있어 데이터 흐름을 제어하는 과정이 복잡하고 불편함 


—> 단방향 데이터 흐름 특징을 갖는 Redux MVC와 달리 데이터를 집접 변형시키지 않고 Action만 넘겨준 후 View에서 이뤄진 Action은 반드시 Distpatcher를 거쳐 데이터 변경 진행

view와 model 사이 state 전이를 간편화해주고 기존 흐름에 파악하기 어려웠던 관리에 예측 가능성을 부여하여 더욱 편리한 방법 제시


- Redux의 세가지 원칙
    1. Single Source of Truth
        - 동일한 데이터는 항상 같은 곳에서 온다
        - 즉 configureStore로 생성한 store라는 하나뿐인 공간에 데이터 모두가 있다는 의미.
    2. State is read-only
        - setState 메소드로만 상태가 변경했던 것처럼 Action이라는 객체를 통해서만 상태를 변경 가능.
    3. Changes are made with pure functions
        - 변경은 순수함수로만 가능.
        - Store - Action - Reducer
        - Store는 상태가 관리되는 오직 하나의 공간
        - Action
            - 앱에서 스토어에 운반할 데이터 (주문서)
            - JS 객체 형식으로 구성
        - Reducer
            - Action을 Store에 바로 전달하는 것이 아닌, Reducer에 전달
            - 이후 Reducer가 Action을 보고 Store의 상태를 업데이트 하는 것
            - reducer(state, action) —> 새로운 state return
            - Action을 Reducer로 전달하기 위해선 dispatch 메소드 사용 dispatch(action)
                - Action 객체가 dispatch 메소드에 전달
                - dispatch를 통해 reducer 호출
                - reducer는 새로운 store 생성
            1. UI 속 컴포넌트 내에 존재하는 이벤트 호출
            2. 이벤트와 연결된 액션 생성자(함수) 호출
            3. 액션이 reducer로 전달 (이 과정을 dispatch가 담당)
            4. dispatch된 액션에 따라 기존 상태값과 액션을 통해 다음 상태값으로 변화
            5. 렌더링
            
                
                
        
        - 장점
            - 예측 가능한 상태 (순수 함수를 사용하기 때문)
                - 순수함수란 반환 값 return이 전달 인자 argument 값에만 의존하는 함수
            - 디버깅에 유리 (redux devtool)
            - 
        - 단점
            - 러닝 커브가 큼
            - BoilerPlate가 큼
