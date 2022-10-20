import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPlanScreen from '../SCREEN/MyPlanScreen';
import ProfileScreen from '../SCREEN/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePath from '../ASSETS/ImagePath';
import ExploreScreen from '../SCREEN/ExploreScreen';
import NewTaskScreen from '../SCREEN/NewTaskScreen ';

const Rendertabicon = (props) => {
  const { ActiveImage, InActiveImage, isfocuses, title } = props
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
      <Image
        style={isfocuses ? {
          width: 45, height: 10, resizeMode: 'contain',
          tintColor: 'red', marginTop: 10
        } : { width: 45, height: 45, resizeMode: 'contain', marginTop: -20 }}
        source={isfocuses ? ActiveImage : InActiveImage}
      />
      <Text style={isfocuses ? { fontSize:12 , fontWeight: 'bold' } : { fontSize: 10, fontWeight: 'bold' }}>
        {title}
      </Text>
    </View>
  );
}







const MyPlanScreenStack = createNativeStackNavigator();
function MyPlanScreenBottomTab() {
  return (
    <MyPlanScreenStack.Navigator>
      <MyPlanScreenStack.Screen name="MyPlanScreenS" component={MyPlanScreen} options={{ headerShown: false }} />
    </MyPlanScreenStack.Navigator>
  );
}

const NewTaskScreenStack = createNativeStackNavigator();
function NewTaskScreenBottomTab() {
  return (
    <NewTaskScreenStack.Navigator>
      <NewTaskScreenStack.Screen name="NewTaskScreenS" component={NewTaskScreen} options={{ headerShown: false }} />
    </NewTaskScreenStack.Navigator>
  );
}

const ExploreScreenStack = createNativeStackNavigator();
function ExploreScreenBottomTab() {
  return (
    <ExploreScreenStack.Navigator>
      <ExploreScreenStack.Screen name="ExploreScreenS" component={ExploreScreen} options={{ headerShown: false }} />
    </ExploreScreenStack.Navigator>
  );
}

const ProfileScreenStack = createNativeStackNavigator();
function ProfileScreenBottomTab() {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen name="ProfileScreenS" component={ProfileScreen} options={{ headerShown: false }} />
    </ProfileScreenStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();
const BottomTabScreen = () => {
  return (


    <Tab.Navigator>



      <Tab.Screen name="MyPlanScreen"
        component={MyPlanScreenBottomTab}
        options={{
          headerShown: false, tabBarLabel: 'My Plan',
          tabBarStyle: { height: 50 },
          tabBarIcon: ({ focused }) => (
            <Rendertabicon
              ActiveImage={ImagePath.myplan}
              InActiveImage={ImagePath.myplan}
              isfocuses={focused}
            />
          )
        }}
      />

      <Tab.Screen name="NewTaskScreen"
        component={NewTaskScreenBottomTab}
        options={{
          headerShown: false, tabBarLabel: 'New Task',
          tabBarStyle: { height: 50 },
          tabBarIcon: ({ focused }) => (
            <Rendertabicon
              ActiveImage={ImagePath.task}
              InActiveImage={ImagePath.task}
              isfocuses={focused}
            />
          )
        }}
      />





      <Tab.Screen name="ExploreScreen"
        component={ExploreScreenBottomTab}
        options={{
          headerShown: false, tabBarLabel: 'Explore',
          tabBarStyle: { height: 50 },
          tabBarIcon: ({ focused }) => (
            <Rendertabicon
              ActiveImage={ImagePath.explore}
              InActiveImage={ImagePath.explore}
              isfocuses={focused}
            />
          )
        }}
      />









      <Tab.Screen name="ProfileScreen"
        component={ProfileScreenBottomTab}
        options={{
          headerShown: false, tabBarLabel: 'Profile',
          tabBarStyle: { height: 50 },
          tabBarIcon: ({ focused }) => (
            <Rendertabicon
              ActiveImage={ImagePath.profile}
              InActiveImage={ImagePath.profile}
              isfocuses={focused}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabScreen;