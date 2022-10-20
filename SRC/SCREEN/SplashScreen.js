import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import ImagePath from '../ASSETS/ImagePath';



const SplashScreen = ({navigation}) => {
    useEffect (()=>{
        setTimeout (()=>{
            navigation.navigate('ToptabScreen')
    },2000);
    },
    );
  return (
    <View style={{  justifyContent: "center", alignItems: "center" }}>
        <ImageBackground style={{height:'100%',}} source={ImagePath.backgroundimage}>
      <View>
        <Image style={{width:400,borderRadius:50,marginTop:10}} source={ImagePath.parvez}/>
        <Image style={{height:350,width:400,resizeMode:'contain'}} source={ImagePath.boy}/>
        <TouchableOpacity>
      <Text style={{fontSize:50,fontWeight:'bold',width:200,textAlign:'center',
      color:'black',backgroundColor:'purple',
      borderBottomRightRadius:30,borderTopLeftRadius:30,marginTop:20,alignSelf:'center'}}>Coding</Text>
    </TouchableOpacity>
      </View>

      
    </ImageBackground>
    </View>
  );
}

export default SplashScreen;