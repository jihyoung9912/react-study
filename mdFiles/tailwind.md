# Tailwind

## Utility-First Css Framework

- 미리 정의된 CSS의 특성들을 Class를 통해 불러와 적용시키는 형태의 CSS 프레임워크.
- HTML 안에 Style Code를 작성할 수 있어 CSS 파일을 별도로 관리할 필요가 없다.
- 원하는 태그의 Style을 작성 및 변경 위해 해당 태그를 검색하거나 찾지 않고 바로 작성 및 수정이 용이하다.
- Class Naming 대신 정해진 유틸리티 Css Class 명(mr-4)을 통해 Class 명을 고민하지 않음과 동시에 간단한 스타일링을 효율적으로 진행할 수 있다.
- **Ex) <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">**
- JS 코드와 완전히 분리되어 있어 컴포넌트 속 JS 를 구성할 때 더욱 가시적이고, JS Framework를  변경해도 제한사항이 없다.
- Tailwind는 기본적으로 Preflight 처리가 되어있다.
    - 브라우저에서 기본적으로 설정하는 스타일과 충돌하지 않게 브라우저에서 기본적으로 설정하는 스타일을 무효화 혹은 백지화 한다. (@tailwind base)
- Styled-Component와의 가장 큰 차이
    - 사소한 스타일 변경을 할 때 Component를 따로 만들 필요가 없다.
    - 더불어 Class Naming을 고민해야 하는 부담을 덜어준다.
- Inline Styles와의 차이
    - arbitary value (Framework에서 제공하는 값)을 사용하지만, 이때의 Utility Class가 Low Level 하기에 오히려 무한한 값 속에서 정해야 하는 것보다 편리하게 선택할 수 있다. (Tailwind에선 저 무한한 값을 Magic Number 속의 Choice라고 표현한다)
    - Inline에서 불가능한 media queries가 적용 가능하여 responsive design을 하기에 용이하다.
    - Inline에서 불가능한 Hover, Focus 등 state variant를 적용할 수 있다.
