import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import loginStyle from "../style/loginStyle";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../color";
const Login = () => {
  return (
    <View style={loginStyle.wrap}>
      <View style={loginStyle.container}>
        <AntDesign name="twitter" size={24} color={color.mainColor} />
        <TextInput style={loginStyle.input}></TextInput>
        <TextInput style={loginStyle.input}></TextInput>
        <View style={loginStyle.buttonWrap}>
          <Button title="SignUp" style={loginStyle.button}></Button>
          <Button title="Login" style={loginStyle.button}></Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
