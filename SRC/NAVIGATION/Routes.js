import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../SCREEN/SplashScreen';

import CodeoneScreen from '../SCREEN/CodeoneScreen';
import CodetwoScreen from '../SCREEN/CodetwoScreen';
import ToptabScreen from './ToptabScreen';
// import SliderBoxScreen from '../SCREEN/SliderBoxScreen';
import ForgetPasswordScreen from '../SCREEN/ForgetPasswordScreen';
import MakeSelectionScreen from '../SCREEN/MakeSelectionScreen';
import NewCredentialScreen from '../SCREEN/NewCredentialScreen';
import PasswordUpdateScreen from '../SCREEN/PasswordUpdateScreen';
import BottomTabScreen from './BottomTabScreen';
import ProfileScreen from '../SCREEN/ProfileScreen';

import MyPlanScreen from '../SCREEN/MyPlanScreen';
import NewTaskScreen from '../SCREEN/NewTaskScreen ';
import ExploreScreen from '../SCREEN/ExploreScreen';
import OtpScreen from '../SCREEN/OtpScreen';
import Feed from '../SCREEN/Feed';
import Article from '../SCREEN/Article';
import DrawerScreen from './DrawerScreen';





const Stack = createNativeStackNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feed'>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {/* <Stack.Screen name="SliderBoxScreen" component={SliderBoxScreen} /> */}
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      <Stack.Screen name="MakeSelectionScreen" component={MakeSelectionScreen} />
      <Stack.Screen name="NewCredentialScreen" component={NewCredentialScreen} />
      <Stack.Screen name="PasswordUpdateScreen" component={PasswordUpdateScreen} />

        <Stack.Screen name="CodeoneScreen" component={CodeoneScreen} />
        <Stack.Screen name="CodetwoScreen" component={CodetwoScreen} />
        <Stack.Screen name="ToptabScreen" component={ToptabScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="MyPlanScreen" component={MyPlanScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />

        



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;