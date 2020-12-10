import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import StackNavigation from './StackNavigation';

export default function Index() {
    return (
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
