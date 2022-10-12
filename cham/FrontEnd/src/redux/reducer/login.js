const login = (state = { status: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      console.log(payload);
      return { ...state, status: true, user_id: payload.user_id, profile_img: payload.profile_img };
    case "LOGOUT":
      return { ...state, status: false, user_id: "" };
    default:
      return state;
  }
};

export default login;
