import React from 'react'
import {gStyle, homeStyle} from '../styles/global'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar
} from 'react-native';

export default function Upload(){
    return(
        <SafeAreaView style={{flex : 1, backgroundColor : 'skyblue'}}>
            <StatusBar barStyle="dark-content" />
            <View style={gStyle.container}>
                <Text>
                hi im Upload :)
                </Text>
            </View>
        </SafeAreaView>
    )
}