import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback, // 이벤트 변화 없음
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";
const HEADER_SAVE = "@headerSave";
export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const [modifying, setModifying] = useState(false);
  const [modifyKey, setModifyKey] = useState("");
  const toModify = useRef(null);
  const loadWorkOrTravel = async () => {
    const workOrTravel = await AsyncStorage.getItem(HEADER_SAVE);
    setWorking(JSON.parse(workOrTravel));
  };
  useEffect(() => {
    loadToDos();
    loadWorkOrTravel();
  }, []);
  const travel = async () => {
    setWorking(false);
    await AsyncStorage.setItem(HEADER_SAVE, "false");
  };
  const work = async () => {
    setWorking(true);
    await AsyncStorage.setItem(HEADER_SAVE, "true");
  };
  const onChangetext = (payload) => setText(payload);
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    // try catch 문 쓰면 좋음
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      setToDos(JSON.parse(s));
    }
  };

  const addToDo = async () => {
    if (text === "") return;

    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: working },
    // });
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, done: false },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
  const deleteToDo = (key) => {
    Alert.alert("Delete To Do?", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
    return;
  };
  const doneToDo = (key) => {
    Alert.alert("Done?", "Are you sure?", [
      { text: "No" },
      {
        text: "Yes!",
        onPress: () => {
          const newToDos = { ...toDos };
          newToDos[key].done = true;
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };
  const noneToDo = (key) => {
    Alert.alert("None?", "Are you sure?", [
      {
        text: "No",
        onPress: () => {
          const newToDos = { ...toDos };
          newToDos[key].done = false;
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
      { text: "Yes!" },
    ]);
  };
  const modifyToDo = (key) => {
    toModify.current.focus();
    setModifying(true);
    setModifyKey(key);
  };
  const modifyingToDo = async () => {
    if (text === "") return;
    const newToDos = { ...toDos };
    newToDos[modifyKey].text = text;
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
    setModifying(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              fontSize: 44,
              fontWeight: "600",
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              fontSize: 44,
              fontWeight: "600",
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        returnKeyType="done"
        onSubmitEditing={modifying ? modifyingToDo : addToDo}
        onChangeText={onChangetext}
        value={text}
        style={styles.input}
        placeholder={
          modifying
            ? "Change the words"
            : working
            ? "Add a To Do"
            : "Where want yo go "
        }
        ref={toModify}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text
                style={{
                  ...styles.toDoText,
                  textDecorationLine: toDos[key].done ? "line-through" : "none",
                  color: toDos[key].done ? "black" : "white",
                }}
              >
                {toDos[key].text}
              </Text>
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {toDos[key].done ? (
                  <TouchableOpacity onPress={() => noneToDo(key)}>
                    <Fontisto
                      name="checkbox-active"
                      size={25}
                      color="black"
                      style={{ marginLeft: 20 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => doneToDo(key)}>
                    <Fontisto
                      name="checkbox-passive"
                      size={25}
                      color="black"
                      style={{ marginLeft: 20 }}
                    />
                  </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => modifyToDo(key)}>
                  <Entypo
                    name="pencil"
                    size={25}
                    color="black"
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <Fontisto
                    name="trash"
                    size={25}
                    color="black"
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              </Text>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
