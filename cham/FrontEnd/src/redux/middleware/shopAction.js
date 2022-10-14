import axios from "axios";

const uploadGoodsToServer = (props) => {
  return async (dispatch, getState) => {
    const { formData, config } = props;
    console.log(formData, config);
    await axios.post("http://localhost:8000/shop/uploads", formData, config);
  };
};

export const shopAction = { uploadGoodsToServer };
