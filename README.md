# React

- JS로 UI를 제어하는 과정 —> HTML로 구성된 파일의 DOM Selector API를 통해 특정 DOM 선택, 특정 이벤트가 발생하면 변화 (속성 변경)
    - 어플리케이션의 규모가 커지고 인터랙션이 많아지면 DOM을 직접 건드리며 작업하기엔 코드가 난잡
    - 이로 Ember, Backbone, Angular등 프레임워크가 만들어졌는데 작동 방식은 js의 특정 값이 바뀌면 특정 DOM의 속성이 바뀌도록 연결, 업데이트
    - 리액트는 이와 다름. 어떤 상태가 바뀌었을때, 상태에 따라 DOM을 어떻게 업데이트 할지가 아니라 아예 다 날려버리고 처음부터 모든걸 새로 보여준다! (View → new View)
    - 업데이트를 어떻게? 고민이 없어져 비교적 쉬운 장점, 느린 속도란 단점
    - 규모가 커질수록 느린 속도 —> Virtual DoM을 통해 해결
    - useEffect의 Side Effect
    
    
    [Virtual DOM](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/Virtual_DOM.md)
   
    [Redux](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/Virtual_DOM.md)
