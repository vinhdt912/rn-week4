import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Complete = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <Text>Complete Screen</Text>
  </View>
);

const CompleteScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Complete Screen" }}
        name="Complete"
        component={Complete}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CompleteScreen;
