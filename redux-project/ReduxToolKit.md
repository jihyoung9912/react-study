# Redux Toolkit

### RTK는 효율적인 Redux 개발을 위한 도구 즉 유틸리티 함수들의 모음.

리덕스에 대한 일반적인 문제를 해결하기 위해 만들어짐

- 저장소 구성이 너무 복잡함
- 유용한 작업을 수행하려면 많은 패키지 추가
- Boilerplate가 큼

RTK에서 제공하는 권장 모범 사례 적용을 통해 좋은 기본동작 제공, 실수 포착, 간단한 코드를 작성함으로써 더 쉽고 빠르게 개발 가능

- 저장소 준비
    - configureStore()
    - store.js 파일 통해 초기 세팅 진행 이후 App을 Provider로 감쌈
        - 모든 state를 관리하는 곳. reducer 함수 내에 상태관리 대상들이 저장됨
        - reducer란 음식점의 접시라고 생각하면 됨.
        - 이후 useSelector로 reducer의 state의 value에 접근
- createStore을 감싸 쓸만한 기본값들과 단순화된 설정 제공
- 리듀서 조각들을 자동으로 합쳐줌
- redux-thunk포함 지정한 미들웨어 더해줌
- redux devtools 확장 사용 가능하게 함
- 리듀서 정의
    - createReducer()
    - switch 대신 액션 타입과 리듀서 함수를 연결해주는 목록 작성
    - immer 라이브러리 통해 코드를 간편하게 업데이트 할 수 있도록 함
- 불변 업데이트 로직
- 액션 생산자나 액션 타입을 직접 작성하지 않고도 전체 상태 ‘조각’을 만들어냄
- Redux Thunk, Rselect
