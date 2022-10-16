import axios from "axios";

const uploadGoodsToServer = (props) => {
  return async (dispatch, getState) => {
    const { formData, config } = props;
    await axios.post("http://localhost:8000/shop/uploads", formData, config);
  };
};

const getPermissionData = () => {
  return async (dispatch, getState) => {
    const goodsData = await axios.get("http://localhost:8000/shop/permission");
    dispatch({ type: "PERMISSION", payload: goodsData.data });
  };
};
const getPermissionCheck = (user_id) => {
  return async (dispatch, getState) => {
    const goodsData = await axios.post(
      "http://localhost:8000/shop/permissionCheck",
      { user_id }
    );
    dispatch({ type: "PERMISSION", payload: goodsData.data });
  };
};

const permissionAction = (action, id) => {
  return async (dispatch, getState) => {
    const goodsData = await axios.post(
      "http://localhost:8000/shop/permission",
      { type: action, id }
    );
    dispatch({ type: "PERMISSION", payload: goodsData.data });
  };
};
export const shopAction = {
  uploadGoodsToServer,
  getPermissionData,
  permissionAction,
  getPermissionCheck,
};
