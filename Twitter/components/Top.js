import React from "react";
import { Text, View, Image } from "react-native";
import { topStyle } from "../style/mainStyle";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../color";
import { Entypo } from "@expo/vector-icons";
const Top = () => {
  return (
    <View style={topStyle.Wrap}>
      <View style={topStyle.container}>
        <Image
          source={require("../assets/cat-5183427__480.jpg")}
          style={topStyle.profile_img}
          resizeMode="cover"
        />
      </View>

      <Text style={topStyle.container}>
        <AntDesign name="twitter" size={24} color={color.mainColor} />
      </Text>
      <Text style={topStyle.container}>
        <Entypo name="menu" size={24} color="black" />
      </Text>
    </View>
  );
};

export default Top;
