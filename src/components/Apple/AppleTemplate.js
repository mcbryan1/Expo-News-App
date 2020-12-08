import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Header from "../Header/Header";
import applebackground from '../../../assets/images/applebackground.jpg'
export default class AppleTemplate extends Component {
  render() {
    return (
      <ImageBackground source={applebackground} style={{height: '100%', width: '100%',}}>
          <View style={styles.child}></View>
        <Header/>

        <View style={styles.news__card}>
            
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});
