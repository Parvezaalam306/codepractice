import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import ImagePath from '../ASSETS/ImagePath';

const ExploreScreen = () => {


  return (

    <ImageBackground style={{ height: 600 }} source={ImagePath.pic7}>

      <View style={{}}>
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={{ backgroundColor: 'purple', height: 60, width: 100, 
          margin: 10, flexDirection: 'row', alignItems: 'center',
           justifyContent: 'center' }}>

            <Text style={{ elevation: 10, fontSize: 25, padding: 10, color: 'white' }}
            >All</Text>

            <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} 
            source={ImagePath.gmail} />

          </TouchableOpacity>


{/* First FlatList */}

          <View>
            <FlatList
              horizontal
              data={[
                { key: 'Devin', allItemImg: ImagePath.profileimage },
                { key: 'clavin', allItemImg: ImagePath.maninblack },
                { key: 'Dan', allItemImg: ImagePath.maninblack },
                { key: 'Dominic', allItemImg: ImagePath.bgimagethree },
                { key: 'Jackson', allItemImg: ImagePath.backgroundimage },

              ]}
              renderItem={({ item }) =>
                <ImageBackground style={{ height: 100, margin: 10, width: 150, 
                borderBottomLeftRadius: 30, borderTopEndRadius: 30,
                 borderRightColor: 'white',
                 borderWidth: 10, borderLeftColor: 'red', borderTopColor: "green", 
                 borderBottomColor: 'blue', overflow: 'hidden', }} 
                 source={item.allItemImg}>
                  <Text>{item.key}</Text>
                </ImageBackground>
              }
            />
          </View>
        </View>


{/* second flatlist */}

        <View>
          <FlatList
            data={[
              { key: 'leader', Name: 'Faruk bhai',Image:ImagePath.faruk },
              { key: 'Developer1', Name: 'Shahid khan' ,Image:ImagePath.shahid},
              { key: 'Developer2', Name: 'Sohan lal Taau',Image:ImagePath.taau },
              { key: 'Developer3',  Name: 'Saif Ali',Image:ImagePath.saif },
              { key: 'Developer4',  Name: 'Piyush',Image:ImagePath.piyush },
              { key: 'Developer5',  Name: 'Sazid Bhai',Image:ImagePath.sazid },
              { key: 'Developer6',  Name: 'Danish Suniyo',Image:ImagePath.suniyo },
              { key: 'Developer7',  Name: 'Khuda Baksh',Image:ImagePath.khudabgs },
              { key: 'Developer8', priceText: 'rs 400', Name: 'Parvez',Image:ImagePath.pic7 },

              { key: 'Developer9', priceText: 'rs 400', Name: 'Mazeet' },
              
            ]}
            renderItem={({ item }) =>
              <View style={{
                minHeight: 50, margin: 15, backgroundColor: 'black', padding: 15, 
                borderBottomLeftRadius: 30,
                borderTopEndRadius: 30, borderRightColor: 'white', borderWidth: 10
                , borderLeftColor: 'red', borderTopColor: "green", 
                borderBottomColor: 'blue'
              }}>
                <Image style={{ height: 120, width: 150, position: 'absolute', right: 10,top:10 }}
                  source={item.Image} />
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }}
                  source={ImagePath.maninblack} />
                  
                <Text style={{ color: 'white', fontSize: 19 }}>{item.Name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ color: 'white', fontSize: 19 }}>{item.key}</Text>
                  <Text style={{
                    color: 'white', fontSize: 17, marginLeft: 10,
                    textDecorationLine: 'line-through'
                  }}>{item.priceText}</Text>

                </View>
              </View>

            }
          />

        </View>
      </View>

    </ImageBackground>


  );
}

export default ExploreScreen;
