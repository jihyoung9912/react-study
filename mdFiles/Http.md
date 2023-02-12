# HTTP

Hyper Text Transfer Protocol

- HTTP란 HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 **프로토콜**.
    - 프로토콜이란 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계
    - 기기 간의 통신은 교환되는 데이터의 형식에 대한 합의가 필요, 이를 정의하는 규칙의 집합.
    - 신호 처리법, 오류처리, 암호, 인증 주소 등
- 모든 데이터 교환의 기초이자 Client - Server 프로토콜이기도 함
    - 인터넷에서 하이퍼텍스트를 교환하기 위한 통신 규약으로 80번 포트를 사용하고 있음
- 클라이언트가 브라우저를 통해 어떠한 서비스를 URL을 통해 요청하면 서버에서는 해당 요청에 대한 결과를 응답하며 동작함.
- Stateless 프로토콜이며 Method, Path, Version, Headers, Body 등으로 구성됨.
    
    [HTTP 메세지](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/Http_Message.md)
    

![image](https://user-images.githubusercontent.com/102154146/215053060-a4284b1a-0fc5-47ea-9ca1-d11ecfb0aea8.png)

- HTTP는 암호화가 되지 않은 평문 데이터를 전송하는 프로토콜 정보 보안의 문제, 해결 위해 HTTPS
    
    [HTTPS](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/Https.md)
    
- HTTP 동작과정
    1. 사용자가 웹 브라우저에 URL 주소 입력
    2. DNS 서버에 웹 서버의 호스트 이름을 IP 주소로 변경 요청
    3. 웹 서버와 TCP 연결 시도
    4. 클라이언트가 서버에게 요청
    5. 서버가 클라이언트에게 응답
    6. 서버 클라이언트간 연결 종료 (Stateless)
    7. 웹 브라우저가 웹 문서 출력

[CORS](https://www.notion.so/CORS-cbf3b6fa3b974990a3ed3f70872e8b0f)

[HTTP ONLY](https://github.com/jihyoung9912/react-study/blob/main/mdFiles/HTTP_Only.md)
