/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import HomeNav from './navigators/home.navigator';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const App = () => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: inDarkMode ? '#000000' : '#ffffff',
        height: '100%',
        width: '100%',
      }}>
      <StatusBar
        backgroundColor={inDarkMode ? '#000000' : '#ffffff'}
        barStyle={inDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={inDarkMode ? DarkTheme : DefaultTheme}>
        <HomeNav />
      </NavigationContainer>
    </View>
  );
};

export default App;
