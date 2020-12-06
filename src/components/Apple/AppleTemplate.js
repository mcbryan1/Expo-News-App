import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AppleTemplate extends Component {
    render() {
        return (
            <View style={styles.main__container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main__container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
