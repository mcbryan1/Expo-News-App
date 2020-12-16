import React, { Component } from "react";
import { Text, StyleSheet, View , ActivityIndicator, FlatList, Share} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import bitcoinbackground from "../../../assets/images/bitcoinbackground.jpg";
import BitcoinTemplate from "./BitcoinTemplate";

export default class BitcoinView extends Component {
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
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-16&sortBy=publishedAt&apiKey=78cd204c8fb145ea84c750e8b260c7f4"
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
            backgroundColor: "#eb9234",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={bitcoinbackground}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.news}
                renderItem={({ item }) => {
                  return (
                    <BitcoinTemplate
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(235,146,52,0.5)", 
  },
});
