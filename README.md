# Namuna Men's Fashion Web Site 👔

## 🏗️ 프로젝트 소개 
### 1. 내용
개인 프로젝트로서 지금까지 학습한 HTML, CSS, Javascript를 활용하여 웹사이트를 제작하였습니다. 'NAMUNA'라는 가상의 남성 패션 브랜드를 소개하는 웹페이지로써 'NAMUNA' 브랜드의 슬로건과 제작한 옷들의 일부를 보여줌으로서 브랜드가 추구하고자 하는 철학과 디자인 성향을 보여주는 기능을 구현하였습니다. 끝으로, 이 웹사이트를 본 사용자들이 'NAMUNA'브랜드로 연락을 할 수 있도록 이메일 발송 기능을 구현하였습니다.


### 2. 기술스택

| 분야        | Stack  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 언어 | <img src="https://img.shields.io/badge/html-F05132?style=flat&logo=html5&logoColor=white">  <img src="https://img.shields.io/badge/css-F05132?style=flat&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Google_Apps_Script-4285F4?style=flat&logo=googleappsscript&logoColor=white"/>||
| 라이브러리 | <img src="https://img.shields.io/badge/bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white"/> |
| 버전 관리 | <img src="https://img.shields.io/badge/git-F05032?style=fflat&logo=git&logoColor=black">  <img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=flat&logo=notion&logoColor=white"/> |

<br><br>


## 🔥구현내용
### 1. 두개의 무한 캐러셀을 활용한 브랜드 대표 옷 보여주기
- **옷만 있는 사진들이 돌아가는 캐러셀**(1번 캐러셀)과 **착장샷이 돌아가는 캐러셀**(2번 캐러셀)을 생성
- 2번 캐러셀을 1번 캐러셀 상단에 두고 옷만 있는 사진이 중앙에 오면 착상샷이 보여지도록 연출

### 2. Scroll 위치에 따른 Opacity 동적 스타일 적용
- 브랜드 로고와 슬로건은 fixed를 통해 위치를 고정하되 스크롤 위치에 따라 Opacity 스타일이 동적으로 적용시킴
- 캐러셀이 85% 정도 보일 때 슬로건이 완전히 투명해져서 보이지 않게끔 함

### 3. Sticky를 활용한 텍스트 + 이미지 전환
- 총 사진 3장, 3개 문구로 구성
- 사진과 문구가 있는 box에 도달 시 사진과 문구는 지정된 위치에서 고정된 상태로 사진과 문구만 변경됨
- 350vh의 박스를 3등분 한 후 350vh/3 만큼 스크롤 이동 시 사진과 문구 전환

### 4. 일정 스크롤 도달 시 비디오 등장 및 자동 재생
- 이전 position: sticky가 적용된 Box를 90% 정도 통과 시 비디오를 등장시킴
- opacity와 top 속성을 동적 적용하여 비디오가 구름이 떠오르듯 등장시킴
- autorun 속성을 통해 비디오 박스 등장 시 자동 재생되게끔 함
- bootstrap을 활용하여 <img src="https://img.shields.io/badge/Countact_us-212121?style=flat&l&logoColor=white"> 생성

### 5. 모달창 생성
- <img src="https://img.shields.io/badge/Countact_us-212121?style=flat&l&logoColor=white"> 클릭 시 메일 발송을 위한 modal창을 띄움
- 이메일 발송을 위한 Form 구성

  - 이메일 발송을 위한 form 내 입력란과 버튼과 같은 기본적인 내용은 HTML과 CSS로 구현함
  - 입력란에 적용된 특수효과나 버튼 디자인은 Bootstrap을 활용함

### 6. 이메일 발송 기능
- 메일 발송 전 양식 및 빈칸 확인 기능 구현

  - 메일 주소 양식이 지켜지지 않거나 빈칸으로 된 입력란은 빨간색 테두리 적용
- 메일주소 양식 및 빈칸 유무 테스트 후 메일 발송

  - 테스트 탈락 시
    
    - 빈칸이 거나 메일주소 양식이 지켜지지 않은 경우 문제가 있는 입력란에 빨간색 테두리를 적용
    - 메일 발송 불가

  - 테스트 통과 시
    
    - 즉시 메일 발송
    - 발송된 메일은 지정된 계정 메일함에 보내지며 발송 주소, 제목, 내용, 발송 시간은 google spread sheet에 저장됨
  
<br>
<br>

----
### 📖 개발 기록
- 홈페이지 제작 기록

  - https://www.notion.so/7148e65bcc864fe3a8abf264f01eb401?v=33f65a19a1b14807ba6366d8ec5ddc10&pvs=4
- 제작 중 공부한 내용

  - https://www.notion.so/d6320fc6295248d7bad3c6e0344b50b3?v=da6c7538eff1459abb023a7827ea0099&pvs=4