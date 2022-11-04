import { View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      <View style={{ flex: 1.5, backgroundColor: "yellow" }}></View>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
    </View>
  );
}
