# React

- JS로 UI를 제어하는 과정 —> HTML로 구성된 파일의 DOM Selector API를 통해 특정 DOM 선택, 특정 이벤트가 발생하면 변화 (속성 변경)
    - 어플리케이션의 규모가 커지고 인터랙션이 많아지면 DOM을 직접 건드리며 작업하기엔 코드가 난잡
    - 이로 Ember, Backbone, Angular등 프레임워크가 만들어졌는데 작동 방식은 js의 특정 값이 바뀌면 특정 DOM의 속성이 바뀌도록 연결, 업데이트
    - 리액트는 이와 다름. 어떤 상태가 바뀌었을때, 상태에 따라 DOM을 어떻게 업데이트 할지가 아니라 아예 다 날려버리고 처음부터 모든걸 새로 보여준다! (View → new View)
    - 업데이트를 어떻게? 고민이 없어져 비교적 쉬운 장점, 느린 속도란 단점
    - 규모가 커질수록 느린 속도 —> Virtual DoM을 통해 해결
    - useEffect의 Side Effect

- 웹 페이지 생성 순서
    - 웹 페이지를 실행 시 HTML 코드를 위에서 아래로 실행함
    - 자바스크립트 코드 실행과 태그의 생성 순서에 대한 이해 필요
    - 혹은 window.onload 이벤트 기능을 통해 해결

- 이벤트
    - 키보드로 키를 입력하거나 마우스 클릭 등 어떤 현상이 프로그램에 영향을 미치는 것
        - 마우스 이벤트(Mouse Events): 마우스와 관련된 이벤트로 클릭, 이동, 드래그 등의 동작을 처리합니다.
        1. 키보드 이벤트(Keyboard Events): 키보드와 관련된 이벤트로 키 입력, 조합 키 등을 처리합니다.
        2. HTML 프레임 이벤트(HTML Frame Events): HTML **`<frame>`** 요소와 관련된 이벤트로 프레임의 로딩, 이동 등을 처리합니다.
        3. HTML 입력 양식 이벤트(HTML Form Events): HTML 입력 양식과 관련된 이벤트로 폼 제출, 입력 변경 등을 처리합니다.
        4. 사용자 인터페이스 이벤트(User Interface Events): 사용자 인터페이스 요소와 관련된 이벤트로 스크롤, 화면 크기 변경 등을 처리합니다.
        5. 구조 변화 이벤트(Mutation Events): 문서 구조의 변경을 감지하는 이벤트로 요소 추가, 제거, 속성 변경 등을 처리합니다. (이벤트 모델이 오래되었고 더 이상 권장되지 않습니다.)
        6. 터치 이벤트(Touch Events): 터치 기반 장치에서 발생하는 이벤트로 터치, 스와이프, 핀치 등을 처리합니다.
        7. 인라인 이벤트 모델 : HTML 태그 내부에서 이벤트 연결하는 방법
            1. button 태그 내부에서 onclick 속성을 사용해 js 코드 입력
        8. 고전 이벤트 모델 : 문서 객체의 이벤트 속성에 함수를 지정
    
    [Virtual DOM](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/Virtual_DOM.md)
   
    [Redux](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/Virtual_DOM.md)
