import React from 'react'
import {gStyle, homeStyle} from '../styles/global'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    Button
} from 'react-native';

export default function Problem({backDonation}){
    return(
        <SafeAreaView style={{flex : 1, backgroundColor : 'skyblue'}}>
            <StatusBar barStyle="dark-content" />
            <View style={gStyle.container}>
                <Text>
                hi im Love :)
                </Text>
                <Button title="back to donation" onPress={backDonation} />
            </View>
        </SafeAreaView>
    )
}