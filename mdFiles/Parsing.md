# Parsing

- 하나의 프로그램을 런타임 환경이 (ex js 엔진) 실제로 행할 수 있는 내부 포맷으로 분석하고 변환하는 것
- 구문 분석이라고도 함. 문장을 이루고 있는 구성 성분으로 분해, 위계 관계를 분석하여 구조를 결정하는 것
- 문서의 내용을 Token으로 분석, 문법적 의미와 구조를 반영한 parse tree를 생성하는 과정
- 즉 일련의 문자열을 의미있는 Token으로 분해하고 그것들로 이뤄진 parse tree를 생성
    - Token? 언어가 사용하는 기본 단어. 의미를 갖는 최소한의 단위. 어휘 분석의 단위
    
    public static void main(String [] args{ ... }
    
    에서 토큰은 public, static, voidm main, (, String, [, ], args, ), { ... 등이며 이러한 토큰을 제외한 공백문자(스페이스, 탭문자, 개행문자 등)는 문자열 내에서 사용되는 경우가 아닌 이상은 모두 아무런 의미를 가지지 않는다
    
    - parse tree? 어떤 문장을 트리 구조로 나타낸 것


    ![image](https://user-images.githubusercontent.com/102154146/213399331-9b9170b8-f554-41dc-84e4-44aab6f96a97.png)
- Parser란 Parsing을 하는 Processor
- Parser는 수작업으로 프로그래밍되며 도구에 의해 자동적으로 만들어질 수 있음.
- Parser는 Compiler의 일부
