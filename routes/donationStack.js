import React from 'react'

import {createStackNavigator} from 'react-navigation-stack';

import DonationScreen from '../screens/donation'
import DonationDetail from '../screens/donationDetail'

import {createAppContainer} from 'react-navigation'


const screens = {
    Donation : {
        screen : DonationScreen,
        navigationOptions :{
            headerShown: false
          }
        // navigationOptions : ({navigation}) => {
        //     return {
        //         header : ()=> <Header navigation={navigation} title='Home TimeZone'/>,
        //     }
        // }
    },
    DonationDetail :{
        screen : DonationDetail,
        // navigationOptions : {
            // title : 'Detail',
            // headerStyle : {backgroundColor : '#eee'} // ini pindah ke defaultNavigationOption
        // }
    },

}




const DonationStack = createStackNavigator(screens)


export default createAppContainer(DonationStack) 

