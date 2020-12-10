import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/navigation/Index";
import { AppLoading } from "expo";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";


export default function App() {
  let [fontsLoaded, error] = useFonts({
    Regular: Quicksand_400Regular,
    ExtraBold: Quicksand_700Bold,
    Medium: Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Index />;
}

const styles = StyleSheet.create({});
