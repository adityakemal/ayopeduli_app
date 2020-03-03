import React, { useState,useEffect } from 'react'
import {gStyle, homeStyle} from '../styles/global'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    Button,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import axios from 'axios'

export default function Donation({navigation}){
    const [listDonation, setListDonation] = useState([])

    useEffect(()=>{
        axios.get('https://ayopeduli.id/api/campaign/')
          .then( (response)=> {
            console.log(response.data.result, 'ini data');
            setListDonation(response.data.results)
          })
          .catch((error)=> {
            console.log(error.response);
          })
        
    },[])

    const ITEMWIDTH = Dimensions.get('window').width / 2;
    console.log(listDonation, 'ini datanyaaaaaaa');
    
    return(
        <View style={gStyle.container}>
        <StatusBar barStyle="dark-content" />
                <Text>
                List Donation :
                </Text>
                    <View style={{ alignSelf : 'center', justifyContent : 'center', width : '100%'}}>
                        <FlatList
                        numColumns={2}
                        data={listDonation}
                        keyExtractor={(item) => item.id62}
                        renderItem={({item}) => (
                            <TouchableOpacity style={{padding :5, width: ITEMWIDTH}} onPress={()=> navigation.navigate('DonationDetail', item)} >
                                <View >
                                    <Image
                                    style={{width: "100%", height : 150}}
                                    source={{uri: item.picture != null? item.picture : 'https://homestaymatch.com/images/no-image-available.png'}}
                                    />
                                <Text style={{color : 'black', marginTop : 5}}>{item.display_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )} />
                    </View>                
            </View>
    )
}