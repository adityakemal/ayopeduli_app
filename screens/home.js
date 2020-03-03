import React from 'react'
import {gStyle, homeStyle} from '../styles/global'
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    Button,
    Modal
} from 'react-native';

import RBSheet from "react-native-raw-bottom-sheet";

export default class Home extends React.Component{
    gotoDetail = ()=>{
        this.RBSheet.close();
        this.props.navigation.navigate('DonationDetail')
    }
    render(){
        // console.log(this.props, 'ini properti');
        
        return(
            <SafeAreaView style={{flex : 1, backgroundColor : 'skyblue'}}>
                <StatusBar barStyle="dark-content" />
                <View style={gStyle.container}>
                <Button
                    title="OPEN BOTTOM SHEET"
                    onPress={() => {
                        this.RBSheet.open();
                    }}
                />
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={300}
                    duration={250}
                    closeOnDragDown ={true}
                    customStyles={{
                        container: {
                        // justifyContent: "",
                        alignItems: "center",
                        borderRadius : 10,

                        }
                    }}
                >
                <View>
                    <Text>
                    hi im home :)
                    </Text>
                    <Button title="go to detail donatin" onPress={this.gotoDetail }/>
                    {/* <Button title="go to detail donatin test" onPress={()=> }/> */}
              </View>
            </RBSheet>
                </View>
            </SafeAreaView>
        )

    }

}
