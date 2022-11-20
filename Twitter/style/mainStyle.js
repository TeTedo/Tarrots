import { StyleSheet } from "react-native";
import { color } from "../color";
export const bodyStyle = StyleSheet.create({
  Wrap: {
    flex: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 30,
    display: "flex",
    minHeight: 100,
    flexDirection: "row",
  },
  imgView: {
    flex: 2,
  },
  textView: {
    flex: 10,
  },
  id: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    fontSize: 20,
  },
  profile_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 5,
  },
  writeBtn: {
    position: "absolute",
    bottom: 50,
    right: 30,
    width: 40,
    height: 40,
  },
  postBtn: {
    position: "absolute",
    top: 20,
    right: 30,
    width: 100,
  },
  postModifyBtn: {
    position: "absolute",
    top: 20,
    right: 30,
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postInput: {
    borderWidth: 3,
    top: 100,
    width: "90%",
    marginLeft: 10,
    padding: 5,
    minHeight: 200,
  },
});

export const topStyle = StyleSheet.create({
  Wrap: {
    marginTop: 50,
    flex: 0.8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profile_img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
export const navStyle = StyleSheet.create({
  Wrap: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginLeft: 30,
    marginRight: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
