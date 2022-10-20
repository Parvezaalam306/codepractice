import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ImagePath from '../ASSETS/ImagePath';

const MakeSelectionScreen = ({navigation}) => {
    return (
        <ScrollView>
            <ImageBackground style={{height:600}} source={ImagePath.bgimagethree}>
            <View style={{ }}>
                <View style={{ marginTop: 30, marginLeft: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>
                        MAKE
                    </Text>

                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>
                        SELECTION

                    </Text>

                    <Text style={{ fontSize: 15, color: 'white' ,marginTop:20}}>
                        Select which contact detail should we use to reset your passwordf
                    </Text>

                </View>
<TouchableOpacity onPress={()=>navigation.navigate('OtpScreen')}>
<View style={{backgroundColor:"gold",width:'90%',margin:20,flexDirection:'row',borderRadius:20}}>
    <Image style={{width:50,height:60,resizeMode:'contain',margin:10,
    marginTop:20,}} source={ImagePath.mobile}/>
     
        <View>
        <Text style={{color:'black',fontSize:20,marginTop:20,marginLeft:20}}>via sms 8824653998</Text>
        </View>
        
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('OtpScreen')}>
<View style={{backgroundColor:"orange",width:'90%',margin:20,flexDirection:'row',borderRadius:20}}>
    <Image style={{width:50,height:60,resizeMode:'contain',margin:10,
    marginTop:20,}} source={ImagePath.email}/>
     
        <View>
        <Text style={{color:'black',fontSize:20,marginTop:20,marginLeft:20,}}>
            via gmail try@gmail.com</Text>
        </View>
        
</View>
</TouchableOpacity>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}

export default MakeSelectionScreen;