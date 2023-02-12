# HTTP ONLY

- HTTP는 Stateless 프로토콜이기에 상태 정보를 기억하지 못하며 서버는 요청자가 누구인지 식별할 수 없음
- 이를 해결하기 위해 사용자 식별 정보를 쿠키에 저장, 사용자 구별
    - 이는 해커가 다른 사용자의 쿠키를 탈취하게 된다면 식별 정보를 바탕으로 해당 유저로 위장할 수 있고, 권한을 내어주게 됨을 의미함
    - 쿠키는 클라이언트에서 JS로 조회할 수 있기에 JS로 쿠키를 가로채고자 시도함.
        - Session Hijacking 의 위험
            - 인증이 완료된 사용자의 브라우저에서 인증을 식별하고 있는 쿠키를 탈취해 로그인 없이 탈취한 쿠키 즉 인증된 세션을 사용해 서버와 통신하는 행위 (네이버가 간편결제 비밀번호가 있는 이유)
        - XSS (Cross Site Scripting) —> Session Hijacking의 방법 중 하나
    - 이를 해결하는 방법은 브라우저에서 쿠키에 접근할 수 없도록 제한하는 것 —> HTTP Only Cookie
        - 쿠키에 포함된 대부분의 정보는 브라우저에서 접근할 필요가 없기에 기본적으로 적용하는 것이 좋음

- HTTP Only로 JS를 통한 쿠키 탈취 문제를 예방할 수 있지만, 네트워크를 직접 감청하여 가로챌 수도 있음
- 즉 클라이언트에서 서버로 전달하는 패킷을 가로채는 해킹 방법 (Snipping) 은 여전히 위험 (패킷을 캡쳐하면 쿠키의 정보를 알 수 있음
    - 이를 위해 SSL 암호화가 적용된 HTTPS 프로토콜을 사용하여 데이터를 암호화 하는 방법 사용
        - 쿠키 또한 암호화 되어 전송되기에 제 3자는 내용을 알 수 없음.
        - Secure = true 로 Secure Cookies 설정 가능

- HTTP Only Secure Cookies를 사용해도 CSRF (Cross Site Request Forgery)의 위험
    - XSS는 방어 가능하지만 HTTP Only 쿠키에 access token 이나 세션 id 인증 정보를 저장 시 CSRF 공격으로 API 콜을 해커가 요청하면 자동으로 쿠키가 서버로 보내지기 때문에 유저 액션 가능
    - 즉 access token, session id는 HTTP Only에 저장해선 안됨
    - HTTP Only 쿠키에 refresh token만 저장한다면 CSRF 공격시 쿠키가 서버로 보내져도 유저 액션 불가
- CSRF
    - 공격자가 다른 사이트에서 우리 사이트의 API 콜을 요청해 실행하는 공격
    - API 콜 요청자가 누구인지 서버에서 통제하지 않다면 가능
    - 이때 공격자가 클라이언트에 저장된 유저 정보를 서버에 보낼 수 있다면, 로그인한 것처럼 액션 가능
    
- 정리
    - 쿠키에 token 저장 시 XSS 공격으로부터 취약하므로 HTTP Only 사용
    - HTTP Only 사용해도 JS로 Request를 보낼 수 있음
        - 쿠키는 Request에 자동으로 실리는 특성 상 요청을 위조할 수 있음
        - 그렇기에 HTTPS로 Request를 암호화하여 이를 방지함
    - HTTP Only와 HTTPS를 사용해도 CSRF 공격에 취약함
    - 이를 보완하기 위해 Refresh Token을 HTTP Only 쿠키로 설정해서 클라이언트에 보내고, Access Token은 JSON Payload로 받아 웹 어플리케이션 내 로컬 변수로 활용
        - Refresh Token이 CSRF에 의해 사용된다 하더라도 공격자는 Access Token을 알 수 없음
    - 하지만 XSS 취약점을 통해 API 콜을 보낼 때는 무방비하기에 모두 XSS 공격 자체를 막기 위해 노력
    
    Local Storage
    
    SessionStorage
