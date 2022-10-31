# <div align="center">**CHAM**</div>

### 참 편한 쇼핑몰

[screen-recording.webm](https://user-images.githubusercontent.com/107897812/198971354-8cdcea21-5456-438b-a1a3-0057b66f6a67.webm)

### 기간 : 2022.10.12 ~ 2022.10.28

### 개발자 : [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTeTedo&count_bg=%230D00FF&title_bg=%23000000&icon=darkreader.svg&icon_color=%23FF0000&title=hits&edge_flat=false)](https://github.com/TeTedo)(TeTedO)

## 목차

- [**개요**](#개요)
  - [Scripts](#Scripts)
    - [npm install](#npm-install)
    - [npm start](#npm-start)
- [**사용 기술**](#사용-기술)
- [**주요 기능**](#주요-기능)
  - [회원가입](#회원가입)
  - [로그인](#로그인)
  - [유저관리](#유저관리)
  - [프로필변경](#프로필변경)
  - [판매자 신청 현황](#판매자-신청-현황)
  - [장바구니](#장바구니)
  - [주문목록](#주문목록)
  - [리뷰](#리뷰)
  - [포인트](#포인트)
  - [판매금 관리](#판매금-관리)
  - [물건 올리기](#물건-올리기)
  - [판매 승인](#판매-승인)
  - [판매 승인 확인](#판매-승인-확인)
  - [슬라이드 관리](#슬라이드-관리)
  - [판매 물건 관리](#판매-물건-관리)
  - [오류신고](#오류신고)
- [**서브 기능**](#기타)
  - [DB구조](#DB구조)
  - [PPT](#PPT)

---

## **개요**

간단하게 편한 쇼핑몰

### Scripts

실행시키기 위해 FrontEnd, BackEnd 둘다 package를 다운받고 실행시켜야 한다.

#### `npm install`

FrontEnd,BackEnd 폴더에서 npm install

#### `npm start`

FrontEnd,BackEnd 폴더에서 npm start하면 http://localhost:3000에서 실행된다.

---

## 사용 **기술**

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/font awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge&logo=Let's Encrypt&logoColor=white"> <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white"> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=black"> <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/cors-blue?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/multer.js-black?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/anime.js-green?style=for-the-badge&logo=s&logoColor=">

---

## 주요 기능

### **회원가입**

<br/>
<img width=80% src='https://user-images.githubusercontent.com/107897812/198974851-0dc2aa89-63db-4f40-882b-89437b403e06.png' />

<br/>

- 정규표현식으로 양식 설정

```JS
const IDCheck = (e) => {
  const reg1 = new RegExp(/[a-z]/, "gi");
  const reg2 = new RegExp(/\d/, "gi");
  const reg3 = new RegExp(/[ㄱ-힣]/, "gi");
  if (
    (!reg1.test(e.target.value) && !reg2.test(e.target.value)) ||
    reg3.test(e.target.value)
  ) {
    if (e.target.value === "") return;
    alert("영어나 숫자만 이용가능합니다.");
    e.target.value = "";
  }
};
```

<br/>

- 옆으로 넘기는 UI

  <br/>

### **로그인**

<br/>

- 로그인시 토큰 발급(세션에 저장)

```JS
router.post("/login", async (req, res) => {
  const { user_id, user_pw } = req.body;
  const userData = await User.findOne({
    where: { user_id },
  })
    .then((result) => {
      const data = result.dataValues;
      bcrypt.compare(user_pw, data.user_pw, async (err, same) => {
        //로그인 성공
        if (same) {
          // access token
          const access_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.ACCSESS_TOKEN,
            {
              expiresIn: "10m",
            }
          );
          // refresh token
          const refresh_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.REFRESH_TOKEN,
            {
              expiresIn: "1h",
            }
          );

          res.send({ ...data, refresh_token, access_token });
        } else {
          res.send("비밀번호");
        }
      });
    })
    .catch(() => {
      res.send("아이디");
    });
});
```

  <br/>

### **유저관리**

<br/>

- 어드민 아이디로 로그인시 마이페이지에 MANAGE 메뉴 활성화

<br/>

<img width=80% heigth=80% src="https://user-images.githubusercontent.com/107897812/198977555-a9edd86b-e84e-4294-a1ff-b7e1b9ed9eae.png"/>

- 각 유저의 권한을 조절할 수 있다.

### **프로필변경**

<br/>

<img width=80% heigth=80% src="https://user-images.githubusercontent.com/107897812/198978092-8f1c54eb-eb17-48d7-8221-6fcedca3bc35.png"/>

- 마이페이지에서 이름,닉네임,번호,주소,이메일 변경 가능
- 남은 포인트 확인 가능
- 판매자 신청 가능

  <img  src="https://user-images.githubusercontent.com/107897812/198978363-b6eb486c-1c80-46e7-9a5e-8ca8bb84978f.png"/>
판매자 신청시 비밀번호 확인 후 신청 할수 있다.

### **판매자 신청 현황**

<br/>

<img width=80% heigth=80% src="https://user-images.githubusercontent.com/107897812/198978752-12527ca8-8bf5-45c3-9b5f-8bce03b918c1.png"/>

- 어드민으로 접속시 오른쪽에 판매자 신청 현황 버튼이 활성화 된다.

<br/>

### **장바구니**

<br/>

<img src="https://user-images.githubusercontent.com/107897812/198979027-bdb32d50-9f69-43e6-95ff-396781ebbfc8.png"/>

- 로그인 후 상품에 마우스 갖다대면 CART BUY 버튼이 보인다

<br/>

<img src="https://user-images.githubusercontent.com/107897812/198979310-63a7c250-1054-41ce-9665-51666a86b9ba.png"/>

- 상품 상세페이지에서도 CART버튼이 있다.

<br/>

<img src="https://user-images.githubusercontent.com/107897812/198979445-329b57b4-fc54-45b7-b371-fe03f76d17e8.png"/>

- 장바구니 추가시 수량 선택 가능

<br/>

<img width=80% height=80% src="https://user-images.githubusercontent.com/107897812/198979938-c93b6d8a-2af2-4bd4-8046-aa90cb281314.png">

- 장바구니에서 구매 가능

<br/>

<img src="https://user-images.githubusercontent.com/107897812/198980275-dd37061a-5af9-40af-b97d-63634d3dd865.png"/>

- 구매 버튼 클릭시 포인트 사용가능
- 포인트는 구매금액의 5% 쌓인다.

<br/>

<img width=80% height=30% src="https://user-images.githubusercontent.com/107897812/198980148-59f64a36-2020-4d29-8030-39bd9db89aae.png">

- 장바구니에서 0개 선택시 예외처리

### **주문목록**

### **리뷰**

### **포인트**

### **판매금 관리**

### **물건 올리기**

### **판매 승인**

### **판매 승인 확인**

### **슬라이드 관리**

### **판매 물건 관리**

### **오류신고**

## **기타**

### **DB구조**

### **PPT**
