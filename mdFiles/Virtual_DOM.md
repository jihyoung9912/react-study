# Virtual DOM

[DOM](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/DOM.md)

가상의 DOM.

- 브라우저에 실제로 보여지는 DOM이 아닌, 메모리에 가상으로 존재하는 DOM
- JS 객체
- 작동 성능이 실제로 브라우저에서 DOM을 보여주는 것보다 속도가 훨씬 빠름
- 상태 업데이트 → 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해 렌더링
- 비교 알고리즘을 통해 실제 브라우저에서 보여지고 있는 DOM과 비교
- 차이가 있는 곳을 감지, 실제 DOM에 패치
