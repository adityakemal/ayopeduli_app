import React from 'react'
import {gStyle} from '../styles/global'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import {Formik} from 'formik'
import * as yup from 'yup'





export default function DaftarModal({closeModalDaftar}){
    //validation yup
    // const schemaRegister = yup.object({
    //     username : yup.string().required().min(5),
    //     password : yup.string().required().min(5),
    // })

    const schemaRegister = yup.object({
        "phone_number": yup.string().required('Masukan nomor Handphone'),
        "full_name": yup.string().required('Name Lengkap harus di isi').max(40, 'Jangan lebih dari 40 karakter'),
        "email": yup.string().required('Email harus di isi').email('Masukan email yang benar'),
        "password": yup.string().required('Kata sandi harus di isi').min(5, 'Kata sandi harus lebih dari 5 karakter'),
        "re_password" : yup.string().required('masukan ulang Kata sandi').oneOf([yup.ref('password'), null], 'Kata sandi tidak sama'),
        // "nick_name": yup.string().required(),
      })
    return(
        <SafeAreaView style={{flex : 1, justifyContent : 'center'}}>
            <KeyboardAvoidingView  behavior='padding' keyboardVerticalOffset={20} style={{flex : 1}}>
            {/* <ScrollView > */}
            {/* <StatusBar barStyle="light-content" /> */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={gStyle.loginContainer}>
                <View style={gStyle.icandtext}>
                {/* <MaterialCommunityIcons name='login-variant' size={14} style={gStyle.iconLogin}/> */}
                <Text style={{color : 'red', fontSize : 14}} onPress={closeModalDaftar}>Batalkan</Text>
                </View>
                <Formik
                initialValues={{
                    "phone_number": "",
                    "full_name": "",
                    "email": "",
                    "password": "",
                    "re_password" : "",
                    "nick_name": "",
                  }}
                validationSchema={schemaRegister}
                onSubmit={(val)=>{
                    val.username = val.full_name
                    console.log(val);
                    
                }}
                >
                  {(fProps) => (
                    <View style={gStyle.loginForm}>
                        <View style={{flexDirection : 'row', borderBottomWidth: 1, borderColor: 'grey',}}>
                            <View style={{width : 50, alignItems : 'center', justifyContent : 'center',}}>
                            <MaterialIcons  name='smartphone' size={20} />
                            </View>
                            <View style={{ alignSelf : 'stretch',flex : 1}}>
                            <TextInput
                                style={gStyle.loginInput}
                                placeholder='Nomor Handphone'
                                  keyboardType = "phone-pad"
                                onChangeText={fProps.handleChange('phone_number')}
                                returnKeyType ='next'
                                value = {fProps.values.phone_number}
                                onBlur={fProps.handleBlur('phone_number')}
                                returnKeyType='next'
                                placeholderTextColor='grey'/>
                            </View>
                        </View>
                        <Text style={gStyle.errorText}>{fProps.touched.phone_number && fProps.errors.phone_number}</Text>

                        <View style={{flexDirection : 'row', borderBottomWidth: 1, borderColor: 'grey',}}>
                            <View style={{width : 50, alignItems : 'center', justifyContent : 'center',}}>
                            <FontAwesome  name='user-circle' size={20} />
                            </View>
                            <View style={{ alignSelf : 'stretch',flex : 1}}>
                            <TextInput
                                style={gStyle.loginInput}
                                placeholder='Nama Lengkap'
                                //   keyboardType = "email-address"
                                onChangeText={fProps.handleChange('full_name')}
                                returnKeyType ='next'
                                value = {fProps.values.full_name}
                                onBlur={fProps.handleBlur('full_name')}
                                returnKeyType='next'
                                placeholderTextColor='grey'/>
                            </View>
                        </View>
                        <Text style={gStyle.errorText}>{fProps.touched.full_name && fProps.errors.full_name}</Text>

                      <View style={{flexDirection : 'row', borderBottomWidth: 1, borderColor: 'grey',}}>
                        <View style={{width : 50, alignItems : 'center', justifyContent : 'center',}}>
                          <MaterialIcons  name='email' size={23} />
                        </View>
                        <View style={{ alignSelf : 'stretch',flex : 1}}>
                          <TextInput
                              style={gStyle.loginInput}
                              placeholder='Email'
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
                                placeholder='Kata Sandi'
                                secureTextEntry ={true}
                                onChangeText= {fProps.handleChange('password')}
                                value = {fProps.values.password}
                                onBlur={fProps.handleBlur('password')}
                                returnKeyType='go'
                                placeholderTextColor='grey'/>
                            </View>
                        </View>
                        <Text style={gStyle.errorText}>{ fProps.touched.password && fProps.errors.password}</Text>

                        <View style={{flexDirection : 'row', borderBottomWidth: 1, borderColor: 'grey',}}>
                            <View style={{width : 50, alignItems : 'center', justifyContent : 'center',}}>
                                <FontAwesome  name='lock' size={23} />
                            </View>
                            <View style={{ alignSelf : 'stretch',flex : 1}}>
                            <TextInput
                                style={gStyle.loginInput}
                                placeholder='Masukan Ulang Kata Sandi'
                                secureTextEntry ={true}
                                onChangeText= {fProps.handleChange('re_password')}
                                value = {fProps.values.re_password}
                                onBlur={fProps.handleBlur('re_password')}
                                returnKeyType='go'
                                placeholderTextColor='grey'/>
                            </View>
                        </View>
                        <Text style={gStyle.errorText}>{ fProps.touched.re_password && fProps.errors.re_password}</Text>

                        <TouchableOpacity style={gStyle.buttonLogin} onPress={fProps.handleSubmit}>
                            <Text style={gStyle.buttonLoginText}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                  )}
                </Formik>
              </View>
            </TouchableWithoutFeedback>
          {/* </ScrollView> */}
          </KeyboardAvoidingView> 
        </SafeAreaView>
    )
}