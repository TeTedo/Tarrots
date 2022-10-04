const post = (state = [], action) => {
  switch (action.type) {
    case 'POST':
      return [...state, action.payload];
    case 'POSTMODIFY':
      console.log(state);
      state.forEach((el) => {
        console.log(el.id === action.payload.id);
      });
      state = state.map((el, index) => {
        if (el.id === action.payload.id) {
          el.title = action.payload.title;
          el.text = action.payload.text;
        }
        return el;
      });
      console.log(state);
      return state;
    case 'POSTDELETE':
      state.splice(action.payload.id - 1, 1);
      return state;
    default:
      return state;
  }
};

export default post;
