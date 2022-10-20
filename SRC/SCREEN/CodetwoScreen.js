import React, { useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../COMMON/CustomButton';
import CustomInput from '../../COMMON/CustomInput';
import ImagePath from '../ASSETS/ImagePath';

const CodetwoScreen = ({navigation}) => {
  const [check, setUncheck] = useState()

  return (
    <View style={{ justifyContent: "center", }}>
      <ImageBackground style={{height:600}} source={ImagePath.bgimageone}>
      <Text style={{ fontSize: 28, color: 'black', marginTop: 20 ,textAlign:'center'}}>
        Welcome Back !
      </Text>


      <CustomInput
        bgcolor='pink'
        color='white'
        borderTopRightRadius={30}
        ImageInput={ImagePath.email}
        height={45}
        width={40}
        placeholder='Enter your Gmail Id'
        placeholderTextColor='black'
      />

      <CustomInput
        bgcolor='gray'
        color='black'
        borderTopRightRadius={30}
        ImageInput={ImagePath.password}
        height={45}
        width={40}
        borderBottomLeftRadius={30}
        hidepasswordimage={ImagePath.hidepassword}
        placeholder='Enter your Password'
        placeholderTextColor='red'
        hidepassword={true}
        maxLength={10}
      />
      <View>
        <View style={{ flexDirection: 'row', marginTop: 10,paddingLeft:30 }}>
          <TouchableOpacity onPress={() => { setUncheck(!check) }}>
            <Image
              style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: 'purple' }}
              source={check ? ImagePath.untickbox : ImagePath.tickbox}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 8,fontSize:15 }}>Remenber Password </Text>

          <TouchableOpacity onPress={()=>navigation.navigate('ForgetPasswordScreen')}>
          <Text style={{fontSize:15,paddingLeft:50,color:'red'}}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

<View style={{padding:20,alignSelf:'center'}}>
        <CustomButton
      Text='Sign In'
      backgroundcolor='black'
      onPress={()=>navigation.navigate('BottomTabScreen')}
      color='white'
      height={50}
      width={320}
      fontsize={20}
      textalignvertical='center'
      textalign='center'
      radius={30}

      />

      <Text style={{fontSize:20,marginTop:10,textAlign:'center'}}>-----Or Sign In with-----</Text>
      
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:'80%',alignSelf:'center'}}>
    <View style={{width:'45%',}}>
  <CustomButton
      Text='google'
      backgroundcolor='white'
      onPress={()=>navigation.navigate()}
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
      onPress={()=>navigation.navigate('LinearGradientScreen')}
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
    </View>
  );
}

export default CodetwoScreen;