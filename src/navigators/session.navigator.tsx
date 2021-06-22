/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useColorScheme, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import Session from '../pages/session/session.component';
import HomeNav from './home.navigator';
import Profile from '../pages/profile/profile.component';

const Tab = createBottomTabNavigator();

interface Props {
  inDarkMode: boolean;
}

const LeaveBtn = styled.View<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 120px;
  padding: 15px;
  border-radius: 25px;
  background-color: ${({inDarkMode}) => (inDarkMode ? '#29292a' : '#fafafa')};
`;

const CircleBtn = styled.View<Props>`
  border-radius: 150px;
  padding: 11px;
  background-color: ${({inDarkMode}) => (inDarkMode ? '#29292a' : '#fafafa')};
`;

const Avatar = styled.Image<Props>`
  width: 30px;
  height: 30px;
  padding: 20px;
  border-radius: 150px;
  background-color: ${({inDarkMode}) => (inDarkMode ? '#29292a' : '#fafafa')};
`;

const SessionNav = () => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Session"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          elevation: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: inDarkMode ? '#000000' : '#ffffff',
          paddingLeft: 40,
          paddingRight: 10,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => (
            <LeaveBtn inDarkMode={inDarkMode}>
              <Text style={{color: '#5d60ef', fontSize: 15, fontWeight: '700'}}>
                ✌🏾 Leave quietly
              </Text>
            </LeaveBtn>
          ),
        }}
      />

      {/* Need to find a less hacky way to deal with this */}
      <Tab.Screen name="Session" component={Session} />
      <Tab.Screen name="Empty" component={Profile} />
      <Tab.Screen name="None" component={Profile} />

      <Tab.Screen
        name="Leave"
        component={HomeNav}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => (
            <CircleBtn inDarkMode={inDarkMode}>
              <Text style={{fontSize: 18}}>✋🏾</Text>
            </CircleBtn>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Avatar
              source={require('../assets/images/11.png')}
              inDarkMode={inDarkMode}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default SessionNav;
