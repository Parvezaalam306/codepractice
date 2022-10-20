import React,{useState} from 'react';
import { ActivityIndicator, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ImagePath from '../ASSETS/ImagePath';
import Collapsible from 'react-native-collapsible';

const MyPlanScreen = () => {
  const [collaps, setcollaps] = useState('')

  const collapseBtn = (value) => {
    if (value == collaps) {
      setcollaps('')

    } else {
      setcollaps(value)
    }
  }
  return (
    <ScrollView>
    <ImageBackground style={{ height: 600,}} source={ImagePath.maninblack}>

    <View style={{}}>
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />

        <TouchableOpacity onPress={() => collapseBtn("one")}>
          <Text style={{  color: 'purple', fontSize: 34, padding: 20 ,textAlign:'center'}}>Collaps Cards 1</Text>
        </TouchableOpacity>

        {collaps == "one" &&
          <View style={{ backgroundColor: 'purple', padding: 10 ,}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

            </Text>
          </View>
        }

        <TouchableOpacity onPress={() => collapseBtn("two")}>
          <Text style={{  color: 'green', fontSize: 34, padding: 20,textAlign:'center' }}>Collaps Cards 2</Text>
        </TouchableOpacity>

        {collaps == "two" &&
          <View style={{ backgroundColor: 'green' }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

            </Text>
          </View>

        }
        <TouchableOpacity onPress={() => collapseBtn("three")}>
          <Text style={{  color: 'yellow', fontSize: 34, padding: 20 ,textAlign:'center'}}>Collaps Cards 3</Text>
        </TouchableOpacity>

        {collaps == "three" &&
          <View style={{ backgroundColor: 'yellow' }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

            </Text>
          </View>

        }
        <TouchableOpacity onPress={() => collapseBtn("four")}>
          <Text style={{  color: 'red', fontSize: 34, padding: 20,textAlign:'center' }}>Collaps Cards 4</Text>
        </TouchableOpacity>

        {collaps == "four" &&
          <View style={{ backgroundColor: 'red' }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

            </Text>
          </View>

        }
    </View >
    
          </ImageBackground >
</ScrollView>
  );
}

export default MyPlanScreen;