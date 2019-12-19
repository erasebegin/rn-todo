import React, {useState} from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

function ListInput(props) {

  const [todo, setTodo] = useState("");

    const todoInputHandler = (text) => {
        setTodo(text)
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={todoInputHandler}
        value={todo}
        style={styles.input}
      />
      <Button title="ADD" onPress={props.onAddTodo.bind(this, todo)} color="rgb(51, 59, 0)" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "yellow",
    width: "80%",
    color: "yellow"
  }
});

export default ListInput;
