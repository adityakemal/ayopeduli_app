import React, {useEffect, useState} from 'react'
// package ini tidak perlu install apapun 
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {gStyle, homeStyle} from '../styles/global'
import axios from 'axios'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    RefreshControl,
    Button,
    AsyncStorage,
    Modal,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native';
import Login from "./login"
import { NavigationEvents } from 'react-navigation';



export default function Profile({navigation}){
    // use effect is similar to componentdidmount
    const [auth, setAuth] = useState(false)
    const [modal, setModal] = useState(false)
    const [token, setToken] = useState('')
    const [profile, setProfile] = useState({})    
    
    useEffect(() => {
        retrieveData()
        getDataProfile(token)
    },[]);

    const getDataProfile = (token) =>{
        axios.get('https://ayopeduli.id/api/account/me/',
        {
            headers: { Authorization : `Token ${token}`  }
        }
        ).then((res)=>{
            setProfile(res.data)
        }).catch(err=>{
            // console.log(err.response,'dari api');
            
        })
        // console.log(token, 'token input dari api');
        
    }
    
        
    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TOKEN');
            if (value !== null) {
            // We have data!!
            Promise.all([setAuth(true),setToken(value)]).then(()=>{
                // console.log(value, 'TOKEN PROFILE');
                getDataProfile(value)
                setProfile({})
                setAuth(true)
            })
            // setAuth(true)
            // setToken(value)
            }else{
                setAuth(false)
            }
        } catch (error) {
            // Error retrieving data
            console.log('gagal');
        }
    };

    const removeToken = async () => {
        try {
            const value = await AsyncStorage.removeItem('TOKEN');
            console.log(value, 'TOKEN sudah di hapuss');
            setAuth(false)
            setProfile({})
        } catch (error) {
            // Error retrieving data
            console.log('gagal remove token');
        }
    };

    const ModalOff = () =>{
        setModal(false)
    }

    const profileComponent = () =>{
       return <View >
            <Text>hi im Profile you has login :)</Text>
            <Text>nama : {profile.full_name }</Text>
            <Text>email : {profile.email}</Text>
            <Text>address : Dummy</Text>
            <Text>photo : Dummy</Text>
            <Button title='logout' onPress={removeToken} />
        </View>   
    }

    const buttonLogin = () =>{
        return <Button title='Login' style={{backgroundColor : 'red' }} onPress={()=>navigation.navigate('Login') }/>
     }
    
    return(
        <SafeAreaView style={{flex : 1, backgroundColor : 'skyblue'}}>
                    <StatusBar barStyle="light-content" />
                    <NavigationEvents
                        onDidFocus={() => setAuth(true)}
                    />
                    <Modal visible={modal}>
                        {buttonLogin()}
                    </Modal>
                    <View style={gStyle.container}>
                    { auth === true?
                        profileComponent() 
                        :
                        buttonLogin()
                    }
                    </View>
        </SafeAreaView>
    )

}

