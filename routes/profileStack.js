import React from 'react'

import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/login'
import ProfileScreen from '../screens/profile'

import {createAppContainer} from 'react-navigation'

const screens = {
    Profile : {
        screen : ProfileScreen,
        navigationOptions :{
            headerShown: false,
            title : null
          }
        // navigationOptions : ({navigation}) => {
        //     return {
        //         header : ()=> <Header navigation={navigation} title='Home TimeZone'/>,
        //     }
        // }
    },
    Login :{
        screen : LoginScreen,
        navigationOptions : {
            title : 'Login',
        }
    },

}


const ProfileStack = createStackNavigator(screens)


export default createAppContainer(ProfileStack) 

