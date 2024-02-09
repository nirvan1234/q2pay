import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Productlist from '../screens/productlist';
import Productdetails from '../screens/productdetails';

const stack = createNativeStackNavigator();

const HomeNavigator = () => {
    // const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
    initialRouteName='Productlist'
    screenOptions={{headerShown:true}}>
    <stack.Screen name="Productlist" component={Productlist}></stack.Screen>
    <stack.Screen name="Productdetails" component={Productdetails}></stack.Screen>
    </stack.Navigator>
  )
}

export default HomeNavigator