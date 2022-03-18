# react-test

![image](https://user-images.githubusercontent.com/54533283/158503759-c72d41d8-7155-437a-b99b-5aa7b6d01edf.png)


***


# 서브 프로젝트 - 일정

## 17일 (목) : 개발 일정 수립

### 자동완성 : rsf(함수) , rsc (클래스)

> 파일 작성 시 명명 규칙
  - 모듈이름_페이지 (ex. Member_Login.js)
  - components에는 무조건 대문자로 작성할 것

> 페이지 종류
1. 회원 (member)_  5개
  ``` Login.js / MyPage.js (Profile.js / MyListBoard.js) / Join.js ```
  - 회원가입
  - 마이페이지 : 프로필 수정 / 내가 쓴 글 / 진행중인 저금통
  - 로그인

2. 메인 (index)_ 4개
  ``` index.js / Top.js / Nav.js / Bottom.js ```
  - 레이아웃
  - 카테고리
  - 전체 회원이 쓴 글 목록

3. 글짓기 (board)_ 3개
  ``` WriteBoard.js / UpdateBoard.js / ListBoard.js ```
  - 글 쓰기, 글 수정, 내가 쓴 글 목록

4. 저금통 (happyBank : hb)_ 4개
  ``` ListHappyBank.js / WriteHappyBank.js / OpenHappyBank.js / PastHappyBank.js ```
  - 저금통 목록, 저금통 등록, 저금통 오픈, 지난 저금통 보기 (상세보기)

> 상세 기능
 1. 회원(member)
  - 회원가입
    * 유효성 검사 : 이메일, 닉네임
    * 빈 칸 검사 : 모든 항목에 적용
  - 로그인
    * 유효성 검사 : Email/PW
  - 마이페이지
    * 유효성 검사 : 회원 정보 수정
    * 내가 쓴 글 : 조회 / 수정 / 삭제
    * 진행중인 저금통 : 행복 저금통 목록페이지로 연결
  - 로그아웃

2. 메인 (index)
  - 카테고리
    * 로그인 전 : 회원가입 / 로그인" 연결
    * 로그인 후 : 글쓰기 / 행복 저금통 / 마이페이지 / 로그아웃" 연결
  - 전체 회원이 쓴 글 목록
    * 모든 회원이 작성한 글 목록이 카드 형식으로 나옴.
    * 카드 참고 CSS : https://codepen.io/szpakoli/pen/xbJjdR
    * 다른 참고 CSS : https://www.creativosonline.org/ko/31-%EA%B0%9C%EC%9D%98-%EB%AC%B4%EB%A3%8C-%EC%B9%B4%EB%93%9C-HTML-CSS-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%A0%84%EC%9E%90-%EC%83%81%EA%B1%B0%EB%9E%98-%EB%8D%94%EB%B3%B4%EA%B8%B0.html

3. 글짓기 (board)
  - 쓰기
    * 유효성 검사 : 모든 항목
    * 폼 구성 : 제목 / 내용 / 글귀분류 / 기분체크
              hidden(글귀번호, 회원이메일 , 글쓴시간 )
  - 수정
    * 등록된 내용을 불러와야함.
  - 목록
    * 회원이메일로 등록된 게시글 내용만 불러와야함.

4. 저금통 (happyBank : hb)
  - 목록
    * 진행 중인 저금통, 지난 저금통 둘다 보여져야함.
    * 저금통을 누르면 몇개가 저장되어 있는지 보여짐
  - 등록
    * 유효성 검사 : 모든 항목
    * 폼 구성 : 저금통 글 내용(제목) / 글 내용 /
              hidden(저금통 글 번호, 저금통 번호, 작성시간, 회원이메일)
  - 오픈
    * 오픈 버튼 -> 저장된 글 목록 나옴
  - 지난 저금통
    * 저금통 클릭 -> 저장된 글 목록 나옴

## 18일 (금) :

>  휴가 및 공가
  - OJT 면접 및 취업상담으로 빠지는 날 체크
  - 다같이 모여서 개발 가능한 날 화,수

> To Day - 작업
  - vsCode / Spring project : 프로젝트 생성 및 초기 설정 세팅
  - React : 초기 설정 세팅
  - Git : React / Spring 레파지토리 생성
  - 기능에 해당하는 실제 페이지 구현 회의

> 각자 개발 파트
  @HANGYESUK : 메인(프론트)
  @jihodaddy : 백엔드
  @hope1021  : 저금통 등록 CRUD (+감정 캐릭터 디자인)
  @roditee   : 저금통 글 등록 CRUD
  @hyov_vely : 회원가입+로그인+마이페이지

> To Day - 개발 진행 상황
  @hope1021  : Spring React 행복 저금통 CRUD 구현
  @jihodaddy : 글쓰기 관련 정보 수집 및 테스트, 모달창, Nav바 어떻게 할지, 행복 저금통 구현에 참여
  @roditee   : DB 테이블 생성 및 테스트 데이터 삽입
             : 일반 게시글 / 행복 저금통 게시글 CRUD backend (Spring - React 연동 및 기능 구현 완료)
