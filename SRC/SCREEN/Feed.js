import React from 'react';
import { ActivityIndicator, View,StyleSheet,Text,ProgressBarAndroid, ImageBackground } from 'react-native';
import ImagePath from '../ASSETS/ImagePath';

const Feed = () => {
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground style={{height:600}} source={ImagePath.progress}>
      <Text style={{marginTop:20,fontSize:20,color:'black',textAlign:'center',backgroundColor:'red',width:100,alignSelf:'center'}}>Progress Bar</Text>
     
 <View style={styles.container}>
      <View style={styles.example}>
        <Text style={{color:'yellow',fontSize:20}}>Circle Progress Indicator</Text>
        <ProgressBarAndroid />
      </View>
      <View style={styles.example}>
        <Text style={{color:'white',fontSize:20}}>Horizontal Progress Indicator</Text>
        <ProgressBarAndroid styleAttr="Horizontal" />
      </View>
      <View style={styles.example}>
        <Text style={{color:'pink',fontSize:20}}>Colored Progress Indicator</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
      </View>
      <View style={styles.example}>
        <Text style={{color:'red',fontSize:20}}>Fixed Progress Value</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    </View>
  
<Text style={{color:'red',backgroundColor:'black',width:100}}>GO to NEXT</Text>
    </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    marginVertical: 24,
  },
});
export default Feed;