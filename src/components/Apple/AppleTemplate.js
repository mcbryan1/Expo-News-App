import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Header from "../Header/Header";
import applebackground from "../../../assets/images/applebackground.jpg";
import apple from "../../../assets/images/apple.jpg";
import { AppLoading } from "expo";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import { FontAwesome5 } from "@expo/vector-icons";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

export default function AppleTemplate({ image, author, date, description }) {
  let [fontsLoaded, error] = useFonts({
    Regular: Quicksand_400Regular,
    ExtraBold: Quicksand_700Bold,
    Medium: Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={applebackground}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.child}></View>
      <Header />
      <View style={styles.news__card}>
        <Image
          source={apple}
          style={[
            StyleSheet.absoluteFill,
            { borderRadius: 30, width: width - 90, height: 490 },
          ]}
        />
        <TouchableOpacity style={styles.share__button}>
          <FontAwesome5
            name="share"
            size={20}
            color="#fff"
            style={styles.share__button}
          />
        </TouchableOpacity>
        <View style={styles.news__card__text__container}>
          <View style={styles.news__card__text}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
              <Text style={styles.news__card__time}>20-05-16</Text>
              <Text style={styles.news__card__time}>Solomon</Text>
            </View>
            <Text numberOfLines={4} style={styles.news__card__content}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque perspiciatis eaque necessitatibus voluptatum cupiditate, quisquam quidem doloribus quia pariatur ipsum?
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  news__card: {
    position: "absolute",
    top: 90,
    marginHorizontal: 40,
    width: width - 90,
    height: 490,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 20,
    marginVertical: 0,
    marginBottom: 0,
  },
  news__card__text__container: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  news__card__text: {
    marginHorizontal: 30,
  },
  news__card__time: {
    fontFamily: "Medium",
    color: "#aaa",
    fontSize: 13,
    marginVertical: 10,
  },
  news__card__content: {
    fontFamily: "ExtraBold",
    color: "#fff",
    fontSize: 20,
    marginVertical: 10,
  },
  share__button__container: {
    margin: 10,
  },
  share__button: {
    backgroundColor: "rgba(0,0,0,0.8)",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 50,
  },
});
