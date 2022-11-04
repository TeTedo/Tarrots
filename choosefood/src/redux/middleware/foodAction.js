import axios from "axios";
const GetFoodData = () => {
  return async (dispatch, getState) => {
    const Food = await axios.get("http://192.168.0.128:8000/get");
    dispatch({ type: "GET", payload: Food.data });
  };
};
const AddFoodData = ({ value }) => {
  return async (dispatch, getState) => {
    console.log(value);
    await axios.post("http://192.168.0.128:8000/add", { name: value });
    dispatch(GetFoodData());
  };
};
export const foodAction = { GetFoodData, AddFoodData };
