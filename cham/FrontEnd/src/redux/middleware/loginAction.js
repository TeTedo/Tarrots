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

    if (userData) {
      dispatch({
        type: "LOGIN",
        payload: {
          user_id: userData.data.user_id,
          profile_img: userData.data.profile_img,
        },
      });
    }
  };
};

export const loginAction = { signup, login };
