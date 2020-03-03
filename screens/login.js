import React, {useState,useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
    AsyncStorage
} from 'react-native';
import DaftarModal from './daftarModal'
import {gStyle} from '../styles/global'
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import {Formik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

export default function Login({navigation}) {
    const [modalDaftar, setModalDaftar] = useState(false)
    // const [token, setToken] = useState('')
   
    //validation yup
    const schemaValidLogin = yup.object({
      email : yup.string().required().email(),
      password : yup.string().required().min(5),
    })

    const closeModalDaftar = () =>{
      return setModalDaftar(false)
    }

    const storeData = async (token) => {
      try {
        await AsyncStorage.setItem('TOKEN', token);
        console.log('suksess locl strg');
        
      } catch (error) {
        // Error saving data
      }
    };

    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('TOKEN');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
        console.log('tryin to cacth');

      } catch (error) {
        // Error retrieving data
      }
    };



    const getLogin = (data)=>{
      axios.post('https://ayopeduli.id/api/authentication/authenticate/password/',
        data
      ).then( res =>{
        console.log(res.data);
        
        if (res.status === 200) {
          Promise.all([storeData(res.data.token)]).then(()=>{
            console.log('sukses PROMISE');
            navigation.navigate('Profile')
          })
        }
      }).catch( err => {
        console.log(err.response.data, 'INI error LOGIN');
      })
    }


    return (
        <SafeAreaView style={gStyle.loginContainer}>
            {/* <StatusBar barStyle="light-content" /> */}

          <Modal visible={modalDaftar} animationType="slide">
            <DaftarModal closeModalDaftar ={closeModalDaftar}/>
          </Modal>
          <KeyboardAvoidingView behavior='padding' style={gStyle.loginContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={gStyle.loginContainer}>
                <Text style={{alignSelf : 'flex-start',padding: 20}} onPress={()=>ModalOff}>Close</Text>
                <View style={gStyle.icandtext}>
                {/* <MaterialCommunityIcons name='login-variant' size={14} style={gStyle.iconLogin}/> */}
                <Text style={gStyle.textLogin} onPress={()=>setModalDaftar(true)}>Daftar Sekarang</Text>
                </View>
                <Formik
                initialValues={{email : '', password : ''}}
                validationSchema={schemaValidLogin}
                onSubmit={(val)=>{
                getLogin(val)
                }}
                >
                  {(fProps) => (
                    <View style={gStyle.loginForm}>
                      <View style={{flexDirection : 'row', borderBottomWidth: 1, borderColor: 'grey',}}>
                        <View style={{width : 50, alignItems : 'center', justifyContent : 'center',}}>
                          <FontAwesome  name='user-circle' size={20} />
                        </View>
                        <View style={{ alignSelf : 'stretch',flex : 1}}>
                          <TextInput
                              style={gStyle.loginInput}
                              placeholder='email'
                              keyboardType = "email-address"
                              onChangeText={fProps.handleChange('email')}
                              returnKeyType ='next'
                              value = {fProps.values.email}
                              onBlur={fProps.handleBlur('email')}
                              returnKeyType='next'
                              placeholderTextColor='grey'/>
                        </View>
                      </View>
                      <Text style={gStyle.errorText}>{fProps.touched.email && fProps.errors.email}</Text>

                        <View style={{flexDirection : 'row', borderBottomWidth: 1, borderColor: 'grey',}}>
                        <View style={{width : 50, alignItems : 'center', justifyContent : 'center',}}>
                          <FontAwesome  name='lock' size={23} />
                        </View>
                        <View style={{ alignSelf : 'stretch',flex : 1}}>
                          <TextInput
                              style={gStyle.loginInput}
                              placeholder='password'
                              secureTextEntry ={true}
                              onChangeText= {fProps.handleChange('password')}
                              value = {fProps.values.password}
                              onBlur={fProps.handleBlur('password')}
                              returnKeyType='go'
                              placeholderTextColor='grey'/>
                        </View>
                      </View>
                       
                        <Text style={gStyle.errorText}>{ fProps.touched.password && fProps.errors.password}</Text>
                            <TouchableOpacity style={gStyle.buttonLogin} onPress={fProps.handleSubmit}>
                              <Text style={gStyle.buttonLoginText}>Masuk</Text>
                            </TouchableOpacity>
                    </View>
                  )}
                </Formik>
                            <TouchableOpacity style={gStyle.buttonLogin} onPress={()=>storeData('gjgjgj')}>
                              <Text style={gStyle.buttonLoginText}>set ls</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={gStyle.buttonLogin} onPress={retrieveData}>
                              <Text style={gStyle.buttonLoginText}>get ls</Text>
                            </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView> 
        </SafeAreaView>
    );
}
