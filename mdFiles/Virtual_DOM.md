# Virtual DOM

[DOM](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/DOM.md)

가상의 DOM.

- 브라우저에 실제로 보여지는 DOM이 아닌, 메모리에 가상으로 존재하는 DOM
- JS 객체
- 작동 성능이 실제로 브라우저에서 DOM을 보여주는 것보다 속도가 훨씬 빠름
- 상태 업데이트 → 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해 렌더링
- 비교 알고리즘을 통해 실제 브라우저에서 보여지고 있는 DOM과 비교
- 차이가 있는 곳을 감지, 실제 DOM에 패치

# 10주차

- 기존 MVC 방식으로 정보 화면 구동 코드를 분리하여 관리
    - Modle 데이터를 생성하거나 업데이트
    - View UI or 화면을 표시
        - Presentation Logic, Business Logic을 구현함에 있어 데이터와 UI는 필수이기에 M-V 사이의 의존성이 당연히 생김
        - Logic이 복잡해짐에 따라 의존성이 더 강해지고 유지보수가 어려워짐
        - 위 M-V 사이의 관계를 어떻게 처리하느냐에 따라 패턴들이 생김 (MVC)
            - 모든 입력들은 Controller로 전달 (구동 담당)
            - Controller는 입력에 해당하는 Model 업데이트
            - 업데이트 결과에 따라 View를 선택
            - 추후 몇가지의 방법을 통해 View 업데이트
            - 이때 결국 View를 업데이트 하기 위해선 Model이 개입하고 M-V 사이 의존성이 생김 → 어려운 유지보수, 재활용
- 웹 사이트 화면은 각 요소가 비슷하고 반복적으로 사용한 경우가 많음
    - 이를 고려하여 컴포넌트 등장.
    - MVC의 View를 독립적으로 구성하여 재사용할 수 있고 컴포넌트를 통해 새로운 컴포넌트를 쉽게 생성하는 블록 조립 형태

- Props
    - 부모 컴포넌트에서 자식 컴포넌트로 전달되는 읽기 전용 객체 타입의 데이터
    - 어떠한 값을 다른 컴포넌트에게 전달하기 위해 사용
- State
    - 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
- Context
    - 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터

- Event
    - 사용자 행위가 일어날 때 event가 발생했다고 표현
    - 모든 HTML 요소는 EventTarget 타입이 정의하는 속성과 메서드를 상속받음
    - EventTarget은 모든 물리 DOM의 최상위 부모 타입
    
    
    - EventTarget이 제공하는 3가지 Method
        - addEventListener
        - removeEventListener
        - dispatchEvent
    - 위의 이벤트를 기다리는 addEventListener를 event handler라고 함
    - 이벤트 처리기는 이벤트가 발생할 때 까지 귀 기울여 기다리다가 이벤트가 발생하면 해당 이벤트를 콜백 함수 쪽으로 알려주는 역할
    - React의 컴포넌트도 on Event 형태의 속성 제공
        - HTML 요소의 이벤트 속성은 모두 소문자인 반면, React 이벤트 속성은 소문자로 시작하는 CamelCase (onClick)
        - JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달

- Event Bubbling
    - 자식 요소에서 발생한 이벤트가 가까운 부모 요소에서 가장 먼 부모 요소까지 계속 전달되는 현상
    - stopPropagation Method → 이벤트 버블링을 중단하고 싶을 때 사용
        - Event Capturing 이라고도 함

- input 요소의 Event 관련 속성
    - input은 type 속성 값에 따라 UI와 사용자 입력을 얻는 방법이 조금씩 다름
        - checkbox radio → checked
        - text email password range → value
        - file → files
        - 위의 속성값으로 사용자가 입력한 구체적인 내용을 얻을 수 있음
        - 마우스 클릭이 일어나면 button과 마찬가지로 clikc event
        - type text → click 대신 change event (onChange)

- preventDefault
    - preventDefault vs stopPropagation → preventDefault는 고유 동작을 중단시키고 후자는 상위 부모들로의 이벤트 전파를 중단
    - Input Form Submit PreventDefault 이유
        - preventDefault는 고유 동작을 중단시키는 것
        - onSubmit 이벤트가 발생하면 <form>이 있는 웹 페이지를 리렌더링 하므로 이를 방지
