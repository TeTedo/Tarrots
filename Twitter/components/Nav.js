import React from "react";
import { Text, View } from "react-native";
import { navStyle } from "../style/mainStyle";
import { Entypo } from "@expo/vector-icons";
const Nav = () => {
  return (
    <View style={navStyle.Wrap}>
      <View style={navStyle.container}>
        <Entypo name="home" size={24} color="black" />
      </View>
      <View style={navStyle.container}>
        <Entypo name="magnifying-glass" size={24} color="black" />
      </View>
      <View style={navStyle.container}>
        <Entypo name="bell" size={24} color="black" />
      </View>
      <View style={navStyle.container}>
        <Entypo name="chat" size={24} color="black" />
      </View>
    </View>
  );
};

export default Nav;
