import React, {useEffect} from 'react'
import {gStyle, homeStyle} from '../styles/global'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    Button
} from 'react-native';


export default function DonationDetail({navigation}){

    useEffect(() => {
        // Update the document title using the browser API
        console.log('im use effect donation');
    });

    const pressHandler = () => navigation.goBack()

    return(
        <SafeAreaView style={{flex : 1, backgroundColor : 'skyblue'}}>
            <StatusBar barStyle="dark-content" />
            <View style={gStyle.container}>
                <Text>
                hi im donation detail :)
                </Text>

                <View >
                    <Text>{navigation.getParam('title')}</Text>
                    <Text>{navigation.getParam('body')}</Text>
                    <Button title='back to home' onPress={pressHandler}/>
                </View>
            </View>
        </SafeAreaView>
    )
}