import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Active = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <Text>Active Screen</Text>
  </View>
);

const ActiveScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Active Screen" }}
        name="Active"
        component={Active}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ActiveScreen;

