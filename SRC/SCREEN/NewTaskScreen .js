import React, {useState} from 'react';
import { Text, View,ImageBackground,ScrollView } from 'react-native';
import ImagePath from '../ASSETS/ImagePath';
import { Calendar } from 'react-native-calendars';

const NewTaskScreen = () => {
  return (
    <ScrollView>
            <ImageBackground style={{height:600}} source={ImagePath.avengers}>

    <View style={{ }}>
     

<Text style={{color:'white',backgroundColor:'gray',width:200,textAlign:'center',alignSelf:'center',marginTop:20,fontSize:30}}>
  my calendar
</Text>

<Calendar style={{margin:20,backgroundColor:'black',}}/>
      
    </View>
    </ImageBackground>
    </ScrollView>
  );
};




export default NewTaskScreen;