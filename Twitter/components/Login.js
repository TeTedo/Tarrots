import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import loginStyle from "../style/loginStyle";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../color";
const Login = ({ setLogin }) => {
  const loginAction = () => {
    setLogin(true);
  };
  return (
    <View style={loginStyle.wrap}>
      <View style={loginStyle.container}>
        <AntDesign name="twitter" size={24} color={color.mainColor} />
        <TextInput placeholder="ID" style={loginStyle.input}></TextInput>
        <TextInput
          placeholder="PW"
          secureTextEntry={true}
          style={loginStyle.input}
        ></TextInput>
        <View style={loginStyle.buttonWrap}>
          <Button title="SignUp" style={loginStyle.button}></Button>
          <Button
            title="Login"
            style={loginStyle.button}
            onPress={() => {
              console.log("로그인");
              loginAction();
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
