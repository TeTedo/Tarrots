import axios from "axios";

const signup = ({ user_id, user_pw, name, nick_name, mobile_number, email, address }) => {
  return async (dispatch, getState) => {
    const data = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      data: { user_id, user_pw, name, nick_name, mobile_number, email, address },
    });
  };
};

const login = ({ user_id, user_pw }) => {
  return async (dispatch, getState) => {
    const userData = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: { user_id, user_pw },
    });

    if (userData.data.user_id) {
      dispatch({
        type: "LOGIN",
        payload: { ...userData.data },
      });
    }

    if (userData.data === "아이디") alert("올바른 아이디를 입력해주세요.");
    if (userData.data === "비밀번호") alert("올바른 비밀번호를 입력해주세요.");
  };
};
const loginCheck = () => {
  return async (dispatch, getState) => {
    const loginData = await axios({
      method: "get",
    });
  };
};
export const loginAction = { signup, login };
