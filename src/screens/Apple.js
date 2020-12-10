import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import AppleTemplate from "../components/Apple/AppleTemplate";
import Header from "../components/Header/Header";
import applebackground from "../../assets/images/applebackground.jpg";

export default class Apple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apple: [],
      loading: true,
    };
  }

  //Fetching Apple News
  fetchNews = () => {
    fetch(
      "http://newsapi.org/v2/everything?q=apple&from=2020-12-09&to=2020-12-09&sortBy=popularity&apiKey=78cd204c8fb145ea84c750e8b260c7f4"
    )
      .then((response) => response.json())
      .then((response) => {
        
        this.setState({
          apple: response.articles,
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

  render() {
    const { navigation } = this.props;
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
              data={this.apple}
              renderItem={({ item }) => {
                return (
                  <AppleTemplate
                    title={item.title}
                    image={item.UrlToImage}
                    author={item.author}
                    content={item.content}
                    date={item.publishedAt}
                    description={item.description}
                    navigation={navigation}
                  />
                );
              }}
              keyExtractor={(item) => item.articles.id}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>

      
    );
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
