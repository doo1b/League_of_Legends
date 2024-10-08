![header](https://capsule-render.vercel.app/api?type=venom&color=gradient&height=160&text=League%20of%20Legends&fontColor=00000)
<br/>
<br/>

## 📝 프로젝트 소개

#### RIOT API 활용한 League of Legends 정보 제공 사이트
- 챔피언 목록 조회
- 챔피언 상세 정보 조회 (이름, 배경 스토리, 스킬, 일러스트)
- 아이템 목록 조회 (이름, 가격, 설명)
- 로테이션 챔피언 목록 조회 (매주 변경)
<br/>


## 🗂 폴더 구조

📦src <br/>
 ┣ 📂app <br/>
 ┃ ┣ 📂api <br/>
 ┃ ┃ ┗ 📂rotation <br/>
 ┃ ┃ ┃ ┗ 📜route.ts <br/>
 ┃ ┣ 📂champions <br/>
 ┃ ┃ ┣ 📂[id] <br/>
 ┃ ┃ ┃ ┗ 📜page.tsx <br/>
 ┃ ┃ ┗ 📜page.tsx <br/>
 ┃ ┣ 📂items <br/>
 ┃ ┃ ┗ 📜page.tsx <br/>
 ┃ ┣ 📂rotation <br/>
 ┃ ┃ ┗ 📜page.tsx <br/>
 ┃ ┣ 📜favicon.ico <br/>
 ┃ ┣ 📜globals.css <br/>
 ┃ ┣ 📜layout.tsx <br/>
 ┃ ┗ 📜page.tsx <br/>
 ┣ 📂components <br/>
 ┣ 📂types <br/>
 ┗ 📂utils <br/>
 <br/>

## 각 페이지별 랜더링 방식 및 주요 기능
#### 메인 페이지
- SSG (Static Site Generation) 방식
- 각각의 페이지가 Link로 연결되어 있음

#### 로테이션 챔피언 페이지
- CSR (Client-Side Rendering) 방식
- use client 사용, 컴포넌트 내부에서 useEffect로 fetch
- 전체 챔피언 목록에서 로테이션 챔피언 아이디를 필터링함

#### 전체 챔피언 목록 페이지
- ISR (Incremental Static Regeneration) 방식
- 기본적으로는 정적 페이지이나, 하루마다 데이터를 갱신함

#### 챔피언 상세 페이지
- SSG 방식
- 목록에서 챔피언 선택시 path로 넘어오는 챔피언 id를 사용하여 데이터 요청
- 각 스킬에 마우스 오버시 모달창으로 스킬 설명 출력

#### 아이템 목록 페이지
- SSG 방식
- 아이템에 목록을 순회하며 아이템 정보를 출력함
- 설명, 이름에 HTML 태그가 섞여있어 해당 부분을 수정하는 함수 추가

  <br/>

## 🛠️ 사용 기술

### 프론트 엔드

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

<br/>

## 🔥 트러블 슈팅

#### 이 호출과 일치하는 오버로드가 없습니다 (타입 오류)
- fetch 과정에서 계속해서 경고문이 출력됨.
- api key를 import할 때의 타입 오류.
- [트러블 슈팅 블로그 작성](https://velog.io/@darong_/Next.js-%EC%9D%B4-%ED%98%B8%EC%B6%9C%EA%B3%BC-%EC%9D%BC%EC%B9%98%ED%95%98%EB%8A%94-%EC%98%A4%EB%B2%84%EB%A1%9C%EB%93%9C%EA%B0%80-%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4)
<br/>

## 과제를 마치며
조금 더 추가적인 기능을 해보고 싶었는데, 다양하게 시도하지 못해서 아쉽다. 하지만 과제를 하며 랜더링 방식에 대해 더 이해할 수 있게 되었고 리액트와 넥스트의 차이, 라우팅에 대한 편리함을 느낄 수 있었다. 따로 시간이 날 때, 전적 검색이라던가 하는 기능을 구현해볼 예정이다.
