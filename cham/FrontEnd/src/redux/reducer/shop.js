const shopPermission = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PERMISSION":
      return { ...payload };
    case "PERMISSIONCHECK":
      return { ...payload };
    default:
      return state;
  }
};

export const shop = { shopPermission };
