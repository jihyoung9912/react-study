# Status Code

HTTP 상태 코드 (응답할 때 주로 사용되어 응답 코드라고도 불림)

- 1XX ****Information responses****
    - 100은 서버가 요청의 일부를 받았으며, 나머지 요청을 기다리고 있음을 의미
        - **Continue**
    - 101은 http → https같이 프로토콜 전환이 일어났을 때 승인을 알려줌
        - **Switching Protocol**

- 2XX ****Successful responses****
    - 200 성공
        - **OK**
    - 201 새로운 컨텐츠 만들기 성공. 보통 POST
        - **Created**
    - 204 요청은 성공, 응답할 컨텐츠가 없을 때
        - **No Content**
    - 206 스트리밍처럼 요청에 대한 응답으로 일부만 전송한 경우
        - **Partial Content**

- 3XX ****Redirection messages****
    - 페이지를 이동시킬 때 주로 사용
    - 301 페이지가 영구적으로 주소가 바뀐 경우
        - **Moved Permanently**
    - 302 페이지가 임시적으로 주소가 바뀐 경우 (로그인 후 메인 페이지로 이동)
        - **Found**
    - 304 이전 방문했을 때의 요청 결과와 다르지 않을 경우. 캐시된 페이지 그대로 사용
        - **Not Modified**
    - 307 클라이언트가 요청한 리소스가 다른 URL에 있으며, 이전 요청과 동일한 메소드를 사용하여 요청해야 할 때 서버가 클라이언트에 이 응답을 직접 보냄.
        - **Temporary Redirect**

- 4XX ****Client error responses****
    - 400 서버가 요청을 이해하지 못함 (올바른 요청을 보냈는지 확인)
        - **Bad Request**
    - 401 로그인을 하지 않아 권한이 없음 비인증
        - **Unauthorized**
    - 403 금지된 페이지. 접근할 수 없음 (관리자 페이지)
        - **Forbidden**
    - 404 찾을 수 없는 페이지 (주소를 잘못 입력 등)
        - **Not Found**
        - 관리자 페이지를 403말고 404로 하는 경우도 있음. 해커들에게 공격받지 않고자 위장
    - 408 요청 시간 초과
        - **Request Timeout**
    - 409 서버가 요청을 처리하는 과정에서 충돌 (회원가입시 이미 사용하고 있는 아이디 등)
        - **Conflict**
    - 410 영구적으로 사용할 수 없는 페이지
        - **Gone**
    - 431 헤더 필드가 너무 크기 때문에 요청 처리하지 않음. 크기를 줄인 다음 다시 전송
        - **Request Header Fields Too Large**
    - 451 법적으로 막힌 페이지
        - **Unavailable For Legal Reasons**

- 5XX ****Server error responses****
    - 요청은 제대로 전송되었지만 서버가 처리하지 못하는 경우
    - 500 내부 서버 에러. 서버상의 에러이기에 서버 관리자의 검토가 필요
        - **Internal Server Error**
    - 501 서버에 해당 요청을 처리하는 기능이 아직 없음
        - **Not Implemented**
    - 502 서버로 가는 요청이 중간에서 유실
        - **Bad Gateway**
    - 503 서버가 터졌거나 유지보수 중일 때 요청을 처리할 준비가 되징 ㅏㄴㅎ음
        - **Service Unavailable**
    - 504 서버 게이트웨이에 문제가 생겨 시간 초과
        - **Gateway Timeout**
    - 505 HTTP 버전이 달라 요청을 처리할 수 없음
        - **HTTP Version Not Supported**
