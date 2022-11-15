import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./style/styleSheet";
import Login from "./components/Login";
import { useState } from "react";
export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <>
          <StatusBar style="auto" />
          <View style={styles.container}></View>
        </>
      ) : (
        <>
          <StatusBar style="auto" />
          <Login />
        </>
      )}
    </>
  );
}
