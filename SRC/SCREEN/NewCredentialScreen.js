import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import CustomButton from '../../COMMON/CustomButton';
import CustomInput from '../../COMMON/CustomInput';
import ImagePath from '../ASSETS/ImagePath';

const NewCredentialScreen = ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground style={{height:600}} source={ImagePath.wolf}>
    <View style={{ marginTop:30, justifyContent: "center",
     alignItems: "center" }}>
     <Image style={{width:200,height:100,}} source={ImagePath.newpassword}/>
      <Text style={{fontSize:47,textAlign:'center',
      fontWeight:'bold',color:'white'}}>
        NEW CREDENTIALS
      </Text>

      <Text style={{fontSize:27,textAlign:'center',color:'yellow'}}>
        Your identity has been verified! Set your new password</Text>

        <CustomInput
      bgcolor='gray'
      color='black'
      borderTopRightRadius={30}
      ImageInput={ImagePath.password}
      height={45}
      width={40}
      borderBottomLeftRadius={30}
      hidepasswordimage={ImagePath.hidepassword}
      placeholder='New Password'
      placeholderTextColor='red'
      hidepassword={true}
      maxLength={10}
      />

<CustomInput
      bgcolor='white'
      color='black'
      borderTopRightRadius={30}
      ImageInput={ImagePath.password}
      height={45}
      width={40}
      borderBottomLeftRadius={30}
      hidepasswordimage={ImagePath.hidepassword}
      placeholder='Confirm Password'
      placeholderTextColor='green'
      hidepassword={true}
      maxLength={10}
      />

<CustomButton
      Text='UPDATE'
      backgroundcolor='black'
      onPress={()=>navigation.navigate('PasswordUpdateScreen')}
      color='white'
      height={50}
      width={320}
      fontsize={20}
      textalignvertical='center'
      textalign='center'
      radius={30}
      
      

      />

    </View>
    </ImageBackground>
    </ScrollView>
  );
}

export default NewCredentialScreen;