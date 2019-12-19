import React from "react";
import {StyleSheet, View, Text} from "react-native";

function ListItem(props) {
  return (
   
        <View style={styles.listItem}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25
  },
  listItem: {
    marginBottom: 30,
    padding: 10,
    color: "white",
    backgroundColor: "rgb(51, 59, 0)",
    borderWidth: 1,
    borderColor: "yellow"
  }
});

export default ListItem;
