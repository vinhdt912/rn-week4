import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import CompleteScreen from "./screens/CompleteScreen";
import AllStackScreen from "./screens/AllStackScreen";
import ActiveScreen from "./screens/ActiveScreen";

const Tab = createBottomTabNavigator();

const routeIcons = {
  Complete: "done-all",
  All: "add-circle-outline",
  Active: "apps",
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName="All"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={routeIcons[route.name]}
              size={30}
              color={focused ? "green" : "grey"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "green",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="Complete" component={CompleteScreen} />
        <Tab.Screen name="All" component={AllStackScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
