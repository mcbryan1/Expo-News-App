import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";
import AppleDetails from "../components/Apple/AppleDetails";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="tabs"
        component={BottomTabNavigation}
      />
      <Stack.Screen
        name="AppleDetails"
        component={AppleDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
