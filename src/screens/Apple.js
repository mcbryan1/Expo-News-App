import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Share,ActivityIndicator } from "react-native";
import AppleView from "../components/Apple/AppleView";

export default class Apple extends Component {
  
  render() {
    return(
      <AppleView/>
    )
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
