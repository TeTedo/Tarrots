const init = [];
const user = (state = init, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return [...state, ...action.payload];
    case 'MODIFY':
      state = state.filter((el) => el[0] !== action.payload[0]);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default user;
