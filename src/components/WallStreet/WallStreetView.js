import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Share,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import WallStreetTemplate from "./WallStreetTemplate";
import WallHeader from "../../components/Header/WallHeader";
import wallbackground from "../../../assets/images/wallstreetbackground.jpg";
console.disableYellowBox = true;
export default class WallStreetView extends Component {
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
            backgroundColor: "#781304",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={wallbackground}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <SafeAreaView style={styles.container}>
              <WallHeader />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.news}
                renderItem={({ item }) => {
                  return (
                    <WallStreetTemplate
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
                keyExtractor={(item) => item.source.url}
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
    backgroundColor: "rgba(120,19,4,0.5)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(120,19,4,0.5)",
  },
});
