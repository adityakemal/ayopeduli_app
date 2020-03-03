import {StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'maroon',
        paddingTop : 50
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        color: 'maroon',
        // backgroundColor: 'red'
    },
    textLogin: {
        fontSize: 14,
        color : '#1975d2',
        // marginBottom : 10
    },
    loginForm: {
        justifyContent: 'center',
        // backgroundColor: 'pink',
        paddingHorizontal: 20

    },
    loginInput: {
        padding: 10,
        // marginBottom: 10,
        alignSelf : 'stretch',
        color : 'black'
    },
    buttonLogin: {
        padding: 10,
        borderRadius: 6,
        // borderWidth: 1,
        width : 200,
        backgroundColor :'#1ba21e',
        alignSelf : "center",
        marginTop : 15
    },
    buttonLoginText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign : "center",
        color : 'white'
    },
    iconLogin: {
        marginRight: 6
    },
    icandtext: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 20
    },
    errorText : {
        color : 'red',
        textAlign : 'center',
        fontSize : 12
    }
})
