import React from 'react'

import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/home'
import DonationDetail from '../screens/donationDetail'

import {createAppContainer} from 'react-navigation'

const screens = {
    HomeScreens : {
        screen : HomeScreen,
        navigationOptions :{
            headerShown: false,
          }
        // navigationOptions : ({navigation}) => {
        //     return {
        //         header : ()=> <Header navigation={navigation} title='Home TimeZone'/>,
        //     }
        // }
    },
    DonationDetail :{
        screen : DonationDetail,
        navigationOptions : {
            title : null,
            // headerStyle : {backgroundColor : '#eee'} // ini pindah ke defaultNavigationOption
        }
    },

}


const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack) 

