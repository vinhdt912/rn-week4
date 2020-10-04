import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {route.params?.id}. {route.params?.done ? "Done" : "Active"}
      </Text>
      <Text style={styles.content}>{route.params?.content}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate("All", {
            id: route.params?.id,
          });
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontSize: 25,
  },
  content: {
    fontSize: 40,
    width: "80%",
    textAlign: "center",
  },
  backButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "lightgreen",
    margin: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
