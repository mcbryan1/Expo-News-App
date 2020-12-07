import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppleTemplate from '../components/Apple/AppleTemplate'
import Swiper from '../components/Swiper/Swiper'

export default class Politics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})
