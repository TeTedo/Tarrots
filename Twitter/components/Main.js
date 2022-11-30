import React, { useContext, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { bodyStyle } from "../style/mainStyle";
import Write from "./Modal/Write";
import ModalDropdown from "react-native-modal-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { userContext } from "../App";
import Modify from "./Modal/Modify";
const Main = () => {
  const [posts, setPosts] = useState([]);
  const [modifying, setModifying] = useState(false);
  const [data, setData] = useState({});
  const options = ["수정하기", "삭제하기"];
  const { userId } = useContext(userContext);
  const select = (idx, user, text) => {
    if (idx) {
      deletePost(user, text);
    } else {
      modifyPost(user, text);
    }
  };

  const modifyPost = (user, text) => {
    setData({ user, text });
    setModifying(true);
  };
  const deletePost = (user, text) => {
    let temp = posts.filter((v) => !(v.userId === user && v.text === text));
    setPosts(temp);
  };
  return (
    <View style={bodyStyle.Wrap}>
      {modifying ? (
        <Modify
          setModifying={setModifying}
          data={data}
          setPosts={setPosts}
          posts={posts}
        />
      ) : null}
      <ScrollView style={{ width: "100%" }}>
        {posts.map((value, idx) => (
          <View style={bodyStyle.container} key={idx}>
            <View style={bodyStyle.imgView}>
              <Image
                source={require("../assets/cat-5183427__480.jpg")}
                resizeMode="cover"
                style={bodyStyle.profile_img}
              />
            </View>
            <View style={bodyStyle.textView}>
              <Text style={bodyStyle.id}>{value.userId}</Text>
              <Text style={bodyStyle.text}>{value.text}</Text>
            </View>
            {userId === value.userId ? (
              <ModalDropdown
                options={options}
                style={{ marginRight: 10 }}
                onSelect={(idx) => select(idx, value.userId, value.text)}
              >
                <Ionicons
                  name="ellipsis-vertical-outline"
                  size={24}
                  color="black"
                />
              </ModalDropdown>
            ) : null}
          </View>
        ))}
      </ScrollView>
      <Write setPosts={setPosts} posts={posts} />
    </View>
  );
};

export default Main;
