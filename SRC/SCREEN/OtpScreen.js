import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import OTPTextInput from 'react-native-otp-textinput';
import ImagePath from '../ASSETS/ImagePath';


const OtpScreen = ({navigation}) => {
    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 20, }}>

            <Image style={{ alignSelf: 'center', height: 90, width: 250,
             resizeMode: 'contain' }}
             source={ImagePath.maninblack} />

            <Text style={{ fontSize: 43, marginBottom: 60, color: 'black', 
            fontWeight: 'bold', marginTop: 20,textAlign:'center' }}>
                Enter OTP</Text>
            <OTPTextInput
                inputCount={5}
            />

            <TouchableOpacity style={{ marginTop: 20 }} 
            onPress={()=>navigation.navigate('NewCredentialScreen')}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', 
                backgroundColor: 'black', 
                textAlign: 'center', padding: 10, borderRadius: 30, 
                elevation: 10, color: 'red' }}>
                    UPDATE
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    headingTEXT: {
        fontSize: 33,
        color: 'red'
    },
    sendBtn: {
        backgroundColor: '#FF6480',
        padding: 15,
        borderRadius: 50,
        marginTop: 30,

    },
    sendTextBtn: {
        textAlign: 'center',
        fontSize: 33,
        color: 'white'

    }
});

export default OtpScreen;