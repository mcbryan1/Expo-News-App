import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppleTemplate from '../components/Apple/AppleTemplate'
import AppleView from '../components/Apple/AppleView'

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
