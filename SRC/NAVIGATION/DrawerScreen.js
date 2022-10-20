// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import Article from '../SCREEN/Article';
// import Feed from '../SCREEN/Feed';
// import 'react-native-gesture-handler';


// const  Drawer= createDrawerNavigator();
// function DrawerScreen() {
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="Feed" component={Feed} />
//         <Drawer.Screen name="Article" component={Article} />
//       </Drawer.Navigator>
//     );
//   }



import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const DrawerScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={()=>navigation.navigate('feed')}>
      <Text>
        next
      </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DrawerScreen;