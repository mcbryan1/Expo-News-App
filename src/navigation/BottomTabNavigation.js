import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5, FontAwesome, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Sports from "../screens/Sports";
import Politics from "../screens/Politics";
import Bitcoin from "../screens/Bitcoin";
import Technology from "../screens/Technology";
import Business from "../screens/Business";
import WallStreetJournal from "../screens/WallStreetJournal";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Politics"
        component={Politics}
        options={{
          tabBarLabel: "Politics",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="poll" color={color} size={22} />
          ),
          tabBarColor: "#7e1191",

        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarLabel: "Sports",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="soccer-ball-o" size={22} color={color} />
          ),
          tabBarColor: "#0d8a01",
        }}
      />
      <Tab.Screen
        name="Bitcoin"
        component={Bitcoin}
        options={{
          tabBarLabel: "Bitcoin",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bitcoin" size={22} color={color} />
          ),
          tabBarColor: "#eb9234",
        }}
      />
      <Tab.Screen
        name="Technology"
        component={Technology}
        options={{
          tabBarLabel: "Tech News",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="robot" size={22} color={color} />
          ),
          tabBarColor: "#1a51a3",

        }}
      />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{
          tabBarLabel: "Business",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="business" size={22} color={color} />
          ),
          tabBarColor: "#1a1301",

        }}
      />
      <Tab.Screen
        name="WallStreet"
        component={WallStreetJournal}
        options={{
          tabBarLabel: "Wall Street",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="journal-whills" size={22} color={color} />
          ),
          tabBarColor: "#781304",

        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
