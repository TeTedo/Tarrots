const init = '';
const loginUser = (state = init, action) => {
  switch (action.type) {
    case 'LOGINUSER':
      return action.payload;
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
};

export default loginUser;
