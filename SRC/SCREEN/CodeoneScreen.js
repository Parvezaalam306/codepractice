import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import CustomButton from '../../COMMON/CustomButton';
import CustomInput from '../../COMMON/CustomInput';
import ImagePath from '../ASSETS/ImagePath';


const CodeoneScreen = ({navigation}) => {
  return (
    <ScrollView>
          <ImageBackground style={{height:600}} source={ImagePath.bgimagetwo}>

    <View style={{  justifyContent: "center", alignItems: "center" }}>
    <Text style={{marginTop:20,fontSize:30,color:'pink',fontWeight:'bold'}}>Create An Account</Text>

      <CustomInput
      bgcolor='black'
      color='yellow'
      radius={30}
      ImageInput={ImagePath.username}
      tintcolor='white'
      height={50}
      width={50}
      placeholder=' Enter your Username'
      placeholderTextColor='yellow'
      />
      
      <CustomInput
      bgcolor='purple'
      color='white'
      borderTopRightRadius={30}
      ImageInput={ImagePath.email}
      height={45}
      width={40}
      placeholder='Enter your Gmail Id'
      placeholderTextColor='white'
      />

<CustomInput
      bgcolor='red'
      color='black'
      borderTopRightRadius={30}
      ImageInput={ImagePath.password}
      height={45}
      width={40}
      borderBottomLeftRadius={30}
      hidepasswordimage={ImagePath.hidepassword}
      placeholder='Enter your Password'
      placeholderTextColor='black'
      hidepassword={true}
      maxLength={10}
      />

      <CustomButton
      Text='Sign Up'
      backgroundcolor='blue'
      onPress={()=>navigation.navigate('Feed')}
      color='white'
      height={50}
      width={320}
      fontsize={20}
      textalignvertical='center'
      textalign='center'

      />

<View style={{marginTop:15}}>
<Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>
  -----Or sign up with-----</Text>
  </View>
  
  <View style={{flexDirection:'row',justifyContent:'space-around',width:'80%'}}>
    <View style={{width:'45%',}}>
  <CustomButton
      Text='google'
      backgroundcolor='white'
      onPress={()=>navigation.navigate('SliderBoxScreen')}
      color='black'
      fontsize={20}
      elevation={50}
      height={45}
      textalignvertical='center'
      radius={30}
      textalign='center'
      buttonimage={ImagePath.googlelogo}


      />
      </View>

      <View style={{width:'45%',}}>
      <CustomButton
      Text='facebook'
      backgroundcolor='darkblue'
      onPress={()=>navigation.navigate('')}
      color='white'
      fontsize={20}
      radius={30}
      height={45}
      textalignvertical='center'
      textalign='center'
      tintColor='white'
      buttonimage={ImagePath.facebooklogo}

      />
      </View>
  </View>
    </View>
    
    </ImageBackground>  


    </ScrollView>
  );
}

export default CodeoneScreen;