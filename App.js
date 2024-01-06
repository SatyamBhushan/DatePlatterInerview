
import * as React from 'react';
import { Modal, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationAllScreen from './src/navigation/tabNavigation';


export default function App() {
  return (

    <NavigationContainer>
      <TabNavigationAllScreen />
    </NavigationContainer>

   
  );
}