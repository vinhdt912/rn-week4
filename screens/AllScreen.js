import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";

const activities = [
  {
    id: 1,
    content: "Wake up at 6am",
    done: false,
  },
  {
    id: 2,
    content: "Study English",
    done: false,
  },
  {
    id: 3,
    content: "Cook breakfast",
    done: false,
  },
  {
    id: 4,
    content: "Cook lunch",
    done: false,
  },
  {
    id: 5,
    content: "Cook dinner",
    done: true,
  },
  {
    id: 6,
    content: "Go out for walk",
    done: false,
  },
  {
    id: 7,
    content: "Codingggggggg",
    done: false,
  },
  {
    id: 8,
    content: "Auzeeeeeeeeeee",
    done: false,
  },
  {
    id: 9,
    content: "Gamingggggggggggg",
    done: false,
  },
];

const AllScreen = ({ navigation }) => {
  const [todoList, setTodoList] = useState(Array.from(activities));
  const [content, setContent] = useState();

  const addAction = () => {
    if (!content) return;
    const newTodo = {
      id: todoList.length + 1,
      content: content,
      done: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setContent("");
  };

  const deleteAction = (id) => {
    const newTodoList = [];
    todoList.map((item) => {
      if (item.id !== id) {
        item.id = item.id > id ? --item.id : item.id;
        newTodoList.push(item);
      }
    });
    setTodoList(newTodoList);
  };

  const createTwoButtonAlert = (item) => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteAction(item.id);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const onClicked = (id) => {
    const item = todoList.find((item) => item.id === id);
    item.done = item.done === true ? false : true;
    todoList[id - 1] = item;
  };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.container}
        source={require("./bgimage.jpg")}
      >
        <Text style={styles.titleText}>LIST TO DO</Text>
        {todoList.map((item) => {
          return (
            <TouchableOpacity
              style={[
                styles.todoItem,
                {
                  backgroundColor: item.done
                    ? "rgb(0, 255, 157)"
                    : "rgb(255, 108, 108))",
                },
              ]}
              onPress={() => {
                onClicked(item.id);
                navigation.navigate("Detail", item);
              }}
              key={item.id}
              onLongPress={() => {
                createTwoButtonAlert(item);
              }}
            >
              <Text style={styles.todoText}>
                {item.id}. {item.content}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View style={styles.inputArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Add activity"
            value={content}
            onChangeText={(text) => setContent(text)}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => addAction()}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: "70%",
    minHeight: 20,
    color: "white",
    borderRadius: 10,
    backgroundColor: "red",
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  inputArea: {
    width: "70%",
    marginTop: 10,
  },
  textInput: {
    height: 45,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "lightgreen",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: 100,
    alignSelf: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: 20,
  },
});
