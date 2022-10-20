import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import CustomButton from '../../COMMON/CustomButton';
import ImagePath from '../ASSETS/ImagePath';

const PasswordUpdateScreen = ({navigation}) => {
  return (
    <ScrollView>
        <ImageBackground style={{height:600}} source={ImagePath.update}>
    <View style={{}}>
      <Text style={{fontSize:42,fontWeight:'bold',color:'gold',textAlign:'center',marginTop:20}}>
        PASSWORD UPDATED
      </Text>
<Image style={{width:200,height:200,alignSelf:'center',marginTop:30,tintColor:'white'}} source={ImagePath.right}/>

<Text style={{fontSize:20,textAlign:'center',marginTop:15,color:'gray'}}>your password has been updated!</Text>
   
<CustomButton
      Text='Login'
      backgroundcolor='purple'
      onPress={()=>navigation.navigate('CodetwoScreen')}
      color='white'
      height={50}
      width={400}
      fontsize={20}
      textalignvertical='center'
      textalign='center'
      radius={30}
      borderwidth={10}
      margin={5}
      />
    </View>
    </ImageBackground>
    </ScrollView>
  );
}

export default PasswordUpdateScreen;