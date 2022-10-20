import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CodeoneScreen from '../SCREEN/CodeoneScreen';
import CodetwoScreen from '../SCREEN/CodetwoScreen';

const Tab = createMaterialTopTabNavigator();

function ToptabScreen() {
  return (


    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'yellow',
      tabBarStyle:{backgroundColor:'black'},
    
    }}
    
    >
      <Tab.Screen name="Sign Up" component={CodeoneScreen} />
      <Tab.Screen name="Log In" component={CodetwoScreen} />
    </Tab.Navigator>
    
  );
}

export default ToptabScreen;