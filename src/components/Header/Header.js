import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

export default function Header() {
  let [fontsLoaded, error] = useFonts({
    Regular: Quicksand_400Regular,
    ExtraBold: Quicksand_700Bold,
    Medium: Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.container__text}>All News From Apple</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 30,
    position: 'absolute',
  },
  container__text: {
    fontFamily: "ExtraBold",
    fontSize: 24,
    color: '#fff'
  },
});
