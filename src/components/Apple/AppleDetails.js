import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import * as Animatable from "react-native-animatable";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default class AppleDetails extends Component {
  render() {
    const { route , navigation} = this.props;
    // const { description, image, content, url, author, source, date, articles} = route.params;
    return (
      <ImageHeaderScrollView
        minOverlayOpacity={0}
        maxOverlayOpacity={0.5}
        overlayColor="#000"
        maxHeight={400}
        minHeight={80}
        headerImage={require("../../../assets/images/applebackground.jpg")}
        renderFixedForeground={() => (
          <View style={styles.overlay}>
            <Animatable.View
              style={styles.navTitleView}
              ref={(navTitleView) => {
                this.navTitleView = navTitleView;
              }}
            >
              <TouchableOpacity onPress={() => {
                    navigate("Apple");
                  }}>
                <AntDesign
                  name="left"
                  size={20}
                  color="#fff"
                  style={styles.share__button}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5
                  name="share"
                  size={20}
                  color="#fff"
                  style={styles.share__button}
                />
              </TouchableOpacity>
            </Animatable.View>
            <View style={styles.fore__image__container}>
              <Text style={styles.fore__image__text}>25-20-17</Text>
              <Animatable.Text
                style={styles.fore__image__title}
                numberOfLines={4}
                animation="slideInDown"
                easing="ease-in-out"
                direction="alternate"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis enim earum eos? Reiciendis reprehenderit architecto
                accusamus voluptatibus cumque? Architecto, consectetur?
              </Animatable.Text>
            </View>
          </View>
        )}
      >
        <View style={styles.main__container}>
          <TriggeringView
            onHide={() => console.log("text hidden")}
            style={styles.container}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.main__container__source}>Source</Text>
              <Text style={styles.main__container__author} numberOfLines={1}>
                Author
              </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Animatable.Text
                numberOfLines={2}
                style={styles.main__container__description}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                sed maiores amet asperiores? Nulla magni modi iste recusandae
                alias aut!
              </Animatable.Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.main__container__content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, explicabo? Ex ipsum hic soluta accusantium corrupti
                aperiam est enim excepturi voluptatem? Corporis neque
                accusantium nostrum, quibusdam, iusto quasi dolorum nesciunt
                nihil iure facere aliquid illum veritatis magnam assumenda
                reprehenderit cumque ab rerum est! Id maxime voluptates et ipsum
                nostrum quos, facere dolor. Ullam mollitia commodi rerum.
                Voluptatum beatae laboriosam fugiat ab quibusdam nemo eius
                ducimus ratione repudiandae dolores autem et qui odit, sed
                molestiae quidem distinctio dolorum, praesentium numquam quis
                placeat nobis corrupti. Omnis mollitia, doloremque fuga animi
                illo excepturi atque esse harum nesciunt? Cupiditate voluptas
                debitis dolorum dolorem numquam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, explicabo? Ex ipsum hic soluta accusantium corrupti
                aperiam est enim excepturi voluptatem? Corporis neque
                accusantium nostrum, quibusdam, iusto quasi dolorum nesciunt
                nihil iure facere aliquid illum veritatis magnam assumenda
                reprehenderit cumque ab rerum est! Id maxime voluptates et ipsum
                nostrum quos, facere dolor. Ullam mollitia commodi rerum.
                Voluptatum beatae laboriosam fugiat ab quibusdam nemo eius
                ducimus ratione repudiandae dolores autem et qui odit, sed
                molestiae quidem distinctio dolorum, praesentium numquam quis
                placeat nobis corrupti. Omnis mollitia, doloremque fuga animi
                illo excepturi atque esse harum nesciunt? Cupiditate voluptas
                debitis dolorum dolorem numquam?
              </Text>
            </View>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  navTitleView: {
    height: 80,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  share__button: {
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  main__container: {
   
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container: {
    borderTopLeftRadius: 50,
  },
  fore__image__container: {
    position: "absolute",
    bottom: 20,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  fore__image__text: {
    color: "#aaa",
    fontFamily: "Medium",
    marginVertical: 30,
    fontSize: 13,
  },
  fore__image__title: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "ExtraBold",
  },
  main__container__source: {
    color: "#aaa",
    fontFamily: "ExtraBold",
    flex: 6,
    fontStyle: 'italic',
  },
  main__container__author: {
    color: "#aaa",
    fontFamily: "ExtraBold",
    flex: 4,
    fontStyle: 'italic',
  },
  main__container__description: {
    fontSize: 20,
    color: "#000",
    fontFamily: "ExtraBold",
  },
  main__container__content: {
    fontSize: 15,
    color: "#aaa",
    fontFamily: "ExtraBold",
    letterSpacing: 1
  },
});
