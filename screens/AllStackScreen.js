import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllScreen from "./AllScreen";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

const AllStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="All">
      <Stack.Screen name="All" component={AllScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AllStackScreen;
