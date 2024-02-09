import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeNavigator from './homeNavigator';


const DrawerNavigator = () => {
    const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator initialRouteName='homeNavigator'>
    <drawer.Screen name="homeNavigator" component={HomeNavigator}></drawer.Screen>
    </drawer.Navigator>
  )
}

export default DrawerNavigator