import React from "react";
import { View, Text, ScrollView } from "react-native";
import { bodyStyle } from "../style/mainStyle";
import Write from "./Modal/Write";
const Main = () => {
  return (
    <View style={bodyStyle.Wrap}>
      <ScrollView>
        <View style={bodyStyle.container}>
          <Text>Masdfasdfasdfain</Text>
        </View>
      </ScrollView>
      <Write />
    </View>
  );
};

export default Main;
