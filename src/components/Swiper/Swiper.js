import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel from "pinar";
import { AppLoading } from "expo";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
const { width, height } = Dimensions.get("window");

export default function Swiper() {
  let [fontsLoaded, error] = useFonts({
    Regular: Quicksand_400Regular,
    ExtraBold: Quicksand_700Bold,
    Medium: Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Carousel
      showsControls={false}
      showsDots={false}
      autoplay={true}
      loop={true}
      autoplayInterval={3000}
      height={70}
      style={{ position: "absolute", bottom: 10 }}
    >
      <View style={styles.swiper__container}>
        <FontAwesome5 name="apple" color="#fff" size={22} />
        <Text style={styles.swiper__text}>News From Apple</Text>
      </View>

      <View style={styles.swiper__container__two}>
        <FontAwesome5 name="bitcoin" size={22} color="#fff" />
        <Text style={styles.swiper__text}>All About Bitcoin</Text>
      </View>

      <View style={styles.swiper__container__three}>
        <MaterialCommunityIcons name="robot" size={22} color="#fff" />
        <Text style={styles.swiper__text}>Tech Crunch</Text>
      </View>

      <View style={styles.swiper__container__four}>
        <MaterialIcons name="business" size={22} color="#fff" />
        <Text style={styles.swiper__text}>Business News</Text>
      </View>

      <View style={styles.swiper__container__five}>
        <FontAwesome5 name="journal-whills" size={22} color="#fff" />
        <Text style={styles.swiper__text}>Wall Street USA</Text>
      </View>
    </Carousel>
  );
}

const styles = StyleSheet.create({
  swiper__container: {
    width: width - 200,
    height: 70,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 0,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  swiper__container__two: {
    width: width - 200,
    height: 70,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 0,
    backgroundColor: "#eb9234",
    justifyContent: "center",
    alignItems: "center",
  },
  swiper__container__three: {
    width: width - 200,
    height: 70,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 0,
    backgroundColor: "#1a51a3",
    justifyContent: "center",
    alignItems: "center",
  },
  swiper__container__four: {
    width: width - 200,
    height: 70,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 0,
    backgroundColor: "#3b0340",
    justifyContent: "center",
    alignItems: "center",
  },
  swiper__container__five: {
    width: width - 200,
    height: 70,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 0,
    backgroundColor: "#781304",
    justifyContent: "center",
    alignItems: "center",
  },
  swiper__text: {
    color: "#fff",
    fontFamily: "ExtraBold",
    fontSize: 16,
  },
});
