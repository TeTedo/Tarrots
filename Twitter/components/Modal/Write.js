import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Modal, Button, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { bodyStyle } from "../../style/mainStyle";
import { userContext } from "../../App";
const Write = ({ posts, setPosts }) => {
  const { userId } = useContext(userContext);
  const [touch, setTouch] = useState(false);
  const [text, setText] = useState("");
  const touched = () => {
    setTouch(true);
  };
  const post = () => {
    if (text === "") return;
    setTouch(false);
    setPosts([...posts, { userId, text }]);
    setText("");
  };
  return (
    <View style={bodyStyle.writeBtn}>
      {touch ? (
        <Modal animationType="slide">
          <View style={bodyStyle.postBtn}>
            <Button title="트윗" onPress={post}></Button>
          </View>
          <TextInput
            style={bodyStyle.postInput}
            placeholder="무슨일이 일어나고 있나요?"
            onChangeText={(val) => setText(val)}
          />
        </Modal>
      ) : (
        <TouchableOpacity onPress={touched}>
          <Entypo name="squared-plus" size={40} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Write;
