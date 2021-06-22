/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useColorScheme, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Home from '../pages/home/home.component';
import Profile from '../pages/profile/profile.component';
import styled from 'styled-components/native';
import SessionNav from './session.navigator';

const Tab = createBottomTabNavigator();

interface Props {
  inDarkMode: boolean;
}

const Button = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  background-color: #5d60ef;
`;

const CalendarWrap = styled.View<Props>`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 1px;
  padding-left: 1px;
  border-radius: 5px;
  background-color: ${({inDarkMode}) => (inDarkMode ? '#29292a' : '#fafafa')};
`;

const UserWrap = styled.View<Props>`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 5px;
  background-color: ${({inDarkMode}) => (inDarkMode ? '#29292a' : '#fafafa')};
`;

const HomeNav = () => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
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
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <CalendarWrap inDarkMode={inDarkMode}>
              <Icon
                name="calendar"
                size={30}
                color={inDarkMode ? '#5d60ef' : '#000000'}
              />
            </CalendarWrap>
          ),
        }}
      />
      <Tab.Screen
        name="Session"
        component={SessionNav}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => (
            <Button>
              <Icon name="plus" size={20} color="#ffffff" />
              <Text style={{marginLeft: 5, color: '#ffffff', fontSize: 15}}>
                Start room
              </Text>
            </Button>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <UserWrap inDarkMode={inDarkMode}>
              <FAIcon
                name="user"
                size={18}
                color={inDarkMode ? '#5d60ef' : '#000000'}
              />
            </UserWrap>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNav;
