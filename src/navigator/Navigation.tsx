import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MovieDetail from '../screens/MovieDetail';
import Home from '../screens/Home';
import { SafeAreaView } from 'react-native';

export type RootStackParamList = {
    Home: undefined,
    Detail:{
        item:any,
    }
  };
  
const RootStack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    
    <RootStack.Navigator initialRouteName="Home">
      
      <RootStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <RootStack.Screen name="Detail" component={MovieDetail} options={{ headerShown: false }} />
  
    </RootStack.Navigator>
   
  );
}