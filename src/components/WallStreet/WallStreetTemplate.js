import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default class WallStreetTemplate extends Component {
  render() {
    return (
      <View style={styles.news__card}>
        <Image
          source={{ uri: this.props.image }}
          style={styles.news__card__image}
        />
        <TouchableOpacity
          style={styles.share__button}
            onPress={() => this.props.articles(this.props.url)}
        >
          <FontAwesome5 name="share" size={23} color="#fff" />
        </TouchableOpacity>

        <View style={styles.news__card__text__container}>
          <View style={styles.news__card__text}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text numberOfLines={1} style={styles.news__card__time}>
                {this.props.date}
              </Text>
              <Text numberOfLines={1} style={styles.news__card__source}>
                {this.props.source}
              </Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(this.props.url)}>
              <Text numberOfLines={7} style={styles.news__card__content}>
                {this.props.content}
              </Text>
            </TouchableOpacity>
            <Text style={styles.news__card__time}>{this.props.author}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    news__card: {
        marginHorizontal: 40,
        width: width - 90,
        height: 490,
        alignSelf: "center",
        borderRadius: 10,
        elevation: 20,
        marginTop: 60,
      },
      news__card__image: {
        borderRadius: 30,
        width: width - 90,
        height: 490,
      },
      share__button: {
        position: "absolute",
        backgroundColor: "rgba(120,19,4,0.9)",
        alignSelf: "flex-end",
        padding: 15,
        borderRadius: 50,
        top: 2,
      },
      news__card__text__container: {
        width: "100%",
        backgroundColor: "rgba(120,19,4,0.9)",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: "absolute",
        bottom: 0,
      },
      news__card__text: {
        marginHorizontal: 20,
      },
      news__card__time: {
        fontFamily: "Medium",
        color: "#000",
        fontSize: 13,
        marginVertical: 10,
        flex: 7
      },
      news__card__source: {
          flex: 3,
        fontFamily: "Medium",
        color: "#000",
        fontSize: 13,
        marginVertical: 10,
      },
      news__card__content: {
        fontFamily: "ExtraBold",
        color: "#fff",
        fontSize: 18,
        marginVertical: 10,
      },
});
