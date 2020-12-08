import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import AppleTemplate from "./AppleTemplate";

export default class AppleView extends Component {
  AppleNews = [
    {
      id: "1",
      source: "Hacker",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in.",
      author: "Leonardo da Vinci",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et suscipit deserunt iure voluptatum consectetur sed incidunt? Officia culpa quis quas labore adipisci provident quia vero ex minima, excepturi, temporibus unde amet perferendis veniam nobis. Fugiat rem doloribus modi. Ipsam placeat debitis adipisci a officia consequatur inventore nisi accusantium quam.",
      date: "2020-15-12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae maxime modi blanditiis minima temporibus reprehenderit perferendis nulla rerum quos?",
      image: require("../../../assets/images/apple.jpg"),
    },
    {
        id: "2",
        source: "Fuckerish",
        title:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in.",
        author: "Leonardo da Vinci",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et suscipit deserunt iure voluptatum consectetur sed incidunt? Officia culpa quis quas labore adipisci provident quia vero ex minima, excepturi, temporibus unde amet perferendis veniam nobis. Fugiat rem doloribus modi. Ipsam placeat debitis adipisci a officia consequatur inventore nisi accusantium quam.",
        date: "2020-15-12",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae maxime modi blanditiis minima temporibus reprehenderit perferendis nulla rerum quos?",
        image: require("../../../assets/images/apple1.jpg"),
      },
  ];
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView>
          <Header/>
        <FlatList
          data={this.AppleNews}
          renderItem={({ item }) => {
            return (
              <AppleTemplate
                title={item.title}
                source={item.source}
                image={item.image}
                author={item.author}
                content={item.content}
                date={item.date}
                description={item.description}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
