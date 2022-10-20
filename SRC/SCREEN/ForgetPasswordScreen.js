import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import CustomButton from '../../COMMON/CustomButton';
import CustomInput from '../../COMMON/CustomInput';
import ImagePath from '../ASSETS/ImagePath';


const ForgetPasswordScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{  flex:1 }}>
      <View style={{backgroundColor:'black',height:600,}}>
      <Image style={{resizeMode:'contain',width:300,height:150}} source={ImagePath.forgetpassword}/>
    <Text style={{textAlign:'center',fontSize:16,margin:5,fontWeight:'bold',color:'white'}}>Provide your Account's email for which you want to reset your password!</Text>
    
    <CustomInput
        bgcolor='green'
        color='white'
        borderTopRightRadius={30}
        ImageInput={ImagePath.email}
        height={45}
        width={40}
        placeholder='Enter your Gmail Id'
        placeholderTextColor='black'
      />

<CustomButton
      Text='NEXT'
      backgroundcolor='red'
      onPress={()=>navigation.navigate('MakeSelectionScreen')}
      color='black'
      height={50}
      width={400}
      fontsize={20}
      textalignvertical='center'
      textalign='center'
      borderRadius={30}
      borderwidth={10}
      
      
      
/>
</View>

    </View>
    </ScrollView>
  );
}

export default ForgetPasswordScreen;