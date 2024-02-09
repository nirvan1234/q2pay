import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawerNavigator';
import HomeNavigator from './homeNavigator';




const AppContainer = () => {
   
  return (
    <NavigationContainer> 
            <HomeNavigator />
   </NavigationContainer>
  )
}

export default AppContainer;