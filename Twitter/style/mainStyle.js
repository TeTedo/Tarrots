import { StyleSheet } from "react-native";
import { color } from "../color";
export const bodyStyle = StyleSheet.create({
  Wrap: {
    flex: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  writeBtn: {
    position: "absolute",
    bottom: 50,
    right: 30,
    width: 40,
    height: 40,
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
