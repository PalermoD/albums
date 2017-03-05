/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import ReactNative, {Text, AppRegistry} from 'react-native'


const App = () => {
    return (
        <Text>
            Some Text
        </Text>
    )
}


ReactNative.AppRegistry.registerComponent('albums', () => App)
