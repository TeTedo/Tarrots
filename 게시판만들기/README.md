# <div align="center">**Community**</div>

### This is my first project to develop basic react skills.

#### **Date** : 2022.9.22 ~ 2022.9.23

#### **Dev** : [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTeTedo&count_bg=%230D00FF&title_bg=%23000000&icon=darkreader.svg&icon_color=%23FF0000&title=hits&edge_flat=false)](https://github.com/TeTedo)(TeTedO)

## Features

- [**Usage**](#Usage)
  - [Scripts](#Scripts)
    - [npm install](#npm-install)
    - [npm start](#npm-start)
- [**Used Tech**](#Used-Tech)
- [**Preview**](#Preview)
  - [NavBar](#NavBar)
  - [Sign up](#Sign-up)
  - [Login](#Login)
  - [Post](#Post)
  - [Modify](#Modify)
  - [Delete](#Delete)
  - [Main](#Main)

---

## Usage

Project with React.

### Scripts

In the project directory, you can run:

`npm install`

To install the dependencies package.

`npm start`

Runs the app in http://localhost:3000

---

## Used Tech

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/font awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">

---

## Preview

### **NavBar**

![NavBar](https://user-images.githubusercontent.com/107897812/193993760-8c0c21b4-e529-4fd3-b69b-975e7901e0d9.png)

There are 4 menu in NavBar. Also, there is hover effect.

![NavBarHover](https://user-images.githubusercontent.com/107897812/193994370-53ec0231-f944-4e0b-976c-37e4e803aa0e.png)

To move clicked page, i used useLocation react Hook.

```Javascript
const SideBar_list = ({ img, path, name }) => {
  const location = useLocation();
  return (
    <Link to={path} className={location.pathname === path ? 'selected' : 'not'}>
      <i className={img}></i>
      <li>{name}</li>
    </Link>
  );
};
```

### **Sign up**

![Signup](https://user-images.githubusercontent.com/107897812/193994683-3639b0cd-5d7e-412c-b4ea-fd80dc2e343c.png)

To sign up, input ID, NickName, PW.

There is input for profile image, but it doesn't work.

### **Login**

![Login](https://user-images.githubusercontent.com/107897812/193996495-fb3c1a96-8006-4edb-9d18-57ec8e409631.png)

To login, input your ID, PW.

### **Post**

### **Modify**

### **Delete**

### **Main**
