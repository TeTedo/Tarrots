const addShopList = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "DELETE":
      return { ...payload };
    default:
      return state;
  }
};

export const shop = { addShopList };
