import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';

export default function Index() {
    return (
        <NavigationContainer>
            <BottomTabNavigation/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
