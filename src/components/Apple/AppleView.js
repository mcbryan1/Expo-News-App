import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Share,ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import AppleTemplate from "./AppleTemplate";
import Header from "../../components/Header/Header";
import applebackground from "../../../assets/images/applebackground.jpg";
console.disableYellowBox = true;
export default class AppleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
    };
  }

  //Fetching Apple News
  fetchNews = () => {
    fetch(
      "http://newsapi.org/v2/everything?q=apple&from=2020-12-11&sortBy=popularity&apiKey=78cd204c8fb145ea84c750e8b260c7f4"
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
            backgroundColor: "#000",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={applebackground}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <SafeAreaView style={styles.container}>
              <Header />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.news}
                renderItem={({ item }) => {
                  return (
                    <AppleTemplate
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
                keyExtractor={(item) => item.source.description}
              />
            </SafeAreaView>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
