import React, { useEffect, useRef, useState } from "react";
import { Modal, View, Text, TextInput, Button } from "react-native";
import { bodyStyle } from "../../style/mainStyle";
const Modify = ({ setModifying, data, setPosts, posts }) => {
  const [text, setText] = useState("");
  const input = useRef(null);
  const post = () => {
    let temp = posts.map((v) => {
      if (v.userId === data.user && v.text === data.text) {
        return { userId: data.user, text };
      }
      return v;
    });
    console.log(temp);
    setPosts(temp);
    setModifying(false);
  };
  const cancel = () => {
    setModifying(false);
  };
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <Modal animationType="slide">
      <View style={bodyStyle.postModifyBtn}>
        <Button title="취소" onPress={cancel}></Button>
        <Button title="수정" onPress={post}></Button>
      </View>
      <TextInput
        ref={input}
        style={bodyStyle.postInput}
        defaultValue={data.text}
        onChangeText={(val) => setText(val)}
      />
    </Modal>
  );
};

export default Modify;
