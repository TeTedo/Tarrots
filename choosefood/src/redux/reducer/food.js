const food = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET":
      return [...payload];
    default:
      return state;
  }
};

export default food;
