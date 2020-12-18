import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Share,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import businessbackground from "../../../assets/images/businessbackground.jpg";
import BizTemplate from "./BizTemplate";
import BizHeader from '../Header/BizHeader'


export default class BizView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
    };
  }

  //Fetching Bitcoin News
  fetchNews = () => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=78cd204c8fb145ea84c750e8b260c7f4"
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          news: response.articles,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchNews();
  }

  //Share Article
  sharearticle = async (articles) => {
    try {
      await Share.share({
        message: "Kindly check this article out " + articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { navigation } = this.props;
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3b0340",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={businessbackground}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <SafeAreaView style={styles.container}>
              <BizHeader />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.news}
                renderItem={({ item }) => {
                  return (
                    <BizTemplate
                      url={item.url}
                      title={item.title}
                      image={item.urlToImage}
                      source={item.source.name}
                      author={item.author}
                      content={item.content}
                      date={item.publishedAt}
                      description={item.description}
                      articles={this.sharearticle}
                      navigation={navigation}
                    />
                  );
                }}
                keyExtractor={(item) => item.title}
              />
            </SafeAreaView>
          </View>
        </ImageBackground>
      );
    }
  }
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(59,3,64,0.5)",
  },
});
