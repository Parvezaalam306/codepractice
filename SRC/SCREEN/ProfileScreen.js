import React, { useState } from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import ToggleSwitch from 'toggle-switch-react-native';
import ImagePath from '../ASSETS/ImagePath';

const ProfileScreen = ({navigation}) => {
  const [radioSelect, setRadioSelect] = useState();

  const radioBtnSelect = (data) => {
    setRadioSelect(data)

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () =>
      setIsEnabled(previousState => !previousState);
  }
  return (
    <View style={{}}>
      <ImageBackground style={{ height: 600 }} source={ImagePath.maninblack}>
        <View style={{ flex: 1, padding: 30 }}>
          <Text style={{ color: 'white', margin: 10, fontSize: 20, textAlign: 'center' }}>Radio Button</Text>
          <View style={{ marginBottom: 10, padding: 10, borderColor: 'red', borderWidth: 2, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => radioBtnSelect("1")}>
              <Image style={{ height: 60, width: 60, tintColor: 'white' }} source={radioSelect == "1" ? ImagePath.radio : ImagePath.unradio} />
            </TouchableOpacity>
            <Text style={{ fontSize: 33, marginLeft: 20, color: 'yellow' }}>Hindi</Text>
          </View>

          <View style={{ marginBottom: 10, padding: 10, borderColor: 'red', borderWidth: 2, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => radioBtnSelect("2")}>
              <Image style={{ height: 60, width: 60, tintColor: 'white' }} source={radioSelect == "2" ? ImagePath.radio : ImagePath.unradio} />
            </TouchableOpacity>
            <Text style={{ fontSize: 33, marginLeft: 20, color: 'white' }}>English</Text>
          </View>


          <View style={{ marginBottom: 10, padding: 10, borderColor: 'red', borderWidth: 2, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => radioBtnSelect("3")}>
              <Image style={{ height: 60, width: 60, tintColor: 'white' }} source={radioSelect == "3" ? ImagePath.radio : ImagePath.unradio} />
            </TouchableOpacity>
            <Text style={{ fontSize: 33, marginLeft: 20, color: 'green' }}>Urdu</Text>
          </View>


        </View>

        <View style={{ flex: 1, marginTop:50}}>
          <View style={{ alignItems: 'center' }}>
            <Switch
              trackColor={{ false: "green", true: "red" }}
              thumbColor={isEnabled? "white" : "red"}
              ios_backgroundColor="gray"
              onValueChange={ToggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Article')}>
          <Text style={{color:'white',fontSize:30,backgroundColor:'red',width:200,marginTop:20,textAlign:'center',alignSelf:'center'}}>
          Article
        </Text>
        </TouchableOpacity>
        </View>

       

      </ImageBackground>
    </View>
  );
}

export default ProfileScreen;