import { Cookie } from "../../util/cookie";
const login = (state = { status: false }, action) => {
  const { type, payload } = action;
  const { setCookie, removeCookie } = Cookie;
  switch (type) {
    case "LOGIN":
      setCookie("access", payload.access_token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      setCookie("refresh", payload.refresh_token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      window.localStorage.setItem("login", true);
      return {
        ...state,
        status: true,
        ...payload,
      };
    case "LOGOUT":
      removeCookie("refresh");
      removeCookie("access");
      window.localStorage.setItem("login", false);
      return { ...state, status: false, user_id: "", profile_img: "" };
    default:
      return state;
  }
};

export default login;
