import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { bodyStyle } from "../../style/mainStyle";
const Write = () => {
  const post = () => {
    console.log("gd");
  };
  return (
    <View style={bodyStyle.writeBtn}>
      <TouchableOpacity onPress={post}>
        <Entypo name="squared-plus" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Write;
