import React, {useState, useEffect,AsyncStorage} from 'react';
import {Alert} from 'react-native';
import Login from './screens/login.js'
import Home from './screens/home.js'
import BottomTabs from './routes/bottomTabs'
import axios from 'axios'
import { NavigationEvents } from 'react-navigation';

export default function App() {
    // use effect is similar to componentdidmount
    useEffect(() => {
      // retrieveData()
    });

   return <BottomTabs/>
}
