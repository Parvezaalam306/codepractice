import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import ImagePath from '../ASSETS/ImagePath';

const Article = ({navigation}) => {


  const [countss, setCount] = useState(0);

  const PlusCount = () => {
    setCount(Number(countss) + 2)
  }

  const MinusCount = () => {
    setCount(Number(countss) - 2)
  }

  const multiplicationCount = () => {
    setCount(Number(countss) * 2)
  }
  const divisionCount = () => {
    setCount(Number(countss) / 2)
  }
  return (
    <View>
      <ImageBackground style={{height:620}} source={ImagePath.download}>
        <Text style={{color:'white',textAlign:'center',marginTop:20,fontSize:20}}>Plus Minus </Text>
    <View style={{  justifyContent: "center", alignItems: "center", flexDirection:'row'}}>

      <TouchableOpacity onPress={() => PlusCount()} style={{ width: '20%', backgroundColor: 'blue', }}>
        <Text style={{ padding: 10, fontSize: 20, color: 'white',textAlign:'center' }}>+</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 50,color:'red' ,margin:30,backgroundColor:'black'}}>{countss}</Text>

      <TouchableOpacity onPress={() => MinusCount()} style={{ width: '20%', backgroundColor: 'red', }}>
        <Text style={{ padding: 10, fontSize: 20, color: 'white' ,textAlign:'center'}}>-</Text>
      </TouchableOpacity>
      </View>
<View style={{justifyContent: "center", alignItems: "center", flexDirection:'row'}}>
      <TouchableOpacity onPress={() => multiplicationCount()} style={{ width: '20%', backgroundColor: 'green', }}>
        <Text style={{ padding: 10, fontSize: 20, color: 'white',textAlign:'center' }}>*</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 50,color:'yellow' ,margin:30,backgroundColor:'black'}}>{countss}</Text>



      <TouchableOpacity onPress={() => divisionCount()} style={{ width: '20%', backgroundColor: 'purple', }}>
        <Text style={{ padding: 10, fontSize: 20, color: 'white',textAlign:'center' }}>/</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Feed')}>
      <Text style={{color:'black',textAlign:'center',fontSize:20,backgroundColor:'red',marginTop:180,width:100,alignSelf:'center'}}>Feed</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Article;

