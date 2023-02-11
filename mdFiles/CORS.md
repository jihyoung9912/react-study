# CORS

Cross-Origin Resource Sharing

CORS 방어막이 존재하기 때문에 리소스가 안전하다는 최소한의 보장을 받을 수 있는 것

- CORS 관련 정책을 위반했을 때 보이는 관련 이슈
- 웹 브라우저는 어떤 HTTP 요청을 하냐에 따라 다른 특징을 가지고 있음
    - img, video, script, link → Cross-Origin 정책 지원
    - XMLHttpRequest, Fetch API → Same-Origin 정책 지원

여기서 Origin이란 URL의 구성요소 중 Protocol, Host, Port를 의미함.

![image](https://user-images.githubusercontent.com/102154146/218247754-d415bd25-909d-4544-957b-19438f6e8ca3.png)


- SOP (Same Origin Policy) 정책은 동일한 출처에 대한 정책
- 즉 동일한 출처에서만 리소스를 공유할 수 있다.
    - 다른 출처 (Cross-Origin) 서버의 이미지 등 리소스는 상호작용이 불가능을 의미
    - 이는 CSRF XSS 등으로부터 보호할 수 있기에 현행 중
- 출처의 동일함은 저 Origin이 동일한지로 판단하는 것
- 웹 브라우저는 다른 출처의 모든 리소스를 차단하지만, CORS 정책을 지킨 리소스 요청만큼은 허용함
