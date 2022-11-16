import { StyleSheet } from "react-native";
import { color } from "../color";
export default styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: color.mainColor,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});
