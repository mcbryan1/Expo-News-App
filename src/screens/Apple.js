import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppleTemplate from '../components/Apple/AppleTemplate'

export default class Politics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppleTemplate/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
