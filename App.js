import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";

import ListItem from "./ListItem";
import ListInput from "./ListInput";

export default function App() {
  
  const [todoList, settodoList] = useState([]);

  function addTodo(todoTitle) {
    settodoList(currentTodo => [
      ...currentTodo,
      { id: Math.random().toString(), value: todoTitle }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        To-do
      </Text>
      <ListInput onAddTodo={addTodo} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoList}
        renderItem={itemData => <ListItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 40
  },
  heading: {
    color: "white",
    fontSize: 40
  },
  button: {
    color: "red",
    overlayColor: "pink"
  }
});
