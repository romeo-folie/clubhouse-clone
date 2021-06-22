/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useColorScheme, View} from 'react-native';
import {
  Container,
  Header,
  Title,
  UserList,
  Sheet,
  Bar,
  InputRow,
  Input,
} from './session.styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import UserMemoji from '../../components/user-memoji/user-memoji.component';

const users = [
  {
    name: 'Ross',
    speaker: true,
    color: '#262626',
    path: require('../../assets/images/1.png'),
  },
  {
    name: 'Daniella',
    speaker: true,
    color: '#F8D5A1',
    path: require('../../assets/images/2.png'),
  },
  {
    name: 'Georgina',
    speaker: true,
    color: '#E8E8E8',
    path: require('../../assets/images/3.png'),
  },
  {
    name: 'Anna',
    speaker: true,
    color: '#C4F0C6',
    path: require('../../assets/images/4.png'),
  },
  {
    name: 'Rachael',
    speaker: true,
    color: '#F6C9D5',
    path: require('../../assets/images/5.png'),
  },
  {
    name: 'Laurel',
    speaker: false,
    color: '#F8D5A1',
    path: require('../../assets/images/6.png'),
  },
  {
    name: 'Sarah',
    speaker: false,
    color: '#DDD3FB',
    path: require('../../assets/images/7.png'),
  },
  {
    name: 'Claudia',
    speaker: false,
    color: '#262626',
    path: require('../../assets/images/8.png'),
  },
  {
    name: 'Harry',
    speaker: false,
    color: '#C4F0C6',
    path: require('../../assets/images/9.png'),
  },
  {
    name: 'Richard',
    speaker: false,
    color: '#E8E8E8',
    path: require('../../assets/images/10.png'),
  },
  {
    name: 'Ian',
    speaker: false,
    color: '#DDD3FB',
    path: require('../../assets/images/11.png'),
  },
  {
    name: 'Flora',
    speaker: false,
    color: '#F6C9D5',
    path: require('../../assets/images/12.png'),
  },
];

const Session = () => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Container>
      <Header>
        <Icon
          name="chevron-down"
          size={30}
          color={inDarkMode ? '#ffffff' : '#000000'}
        />
        <Title inDarkMode={inDarkMode}>🔥Dating Game</Title>
        <View />
      </Header>
      <UserList>
        {users.map(user => (
          <UserMemoji
            name={user.name}
            speaker={user.speaker}
            color={user.color}
            path={user.path}
            key={user.name.toLowerCase()}
          />
        ))}
      </UserList>
      <Sheet>
        <Bar />
        <InputRow>
          <Input placeholder="Type a thought here..." />
          <Icon
            name="sc-telegram"
            size={30}
            color="#5d60ef"
            style={{
              backgroundColor: '#ffffff',
              paddingVertical: 10,
              paddingHorizontal: 7,
              borderRadius: 50,
            }}
          />
        </InputRow>
      </Sheet>
    </Container>
  );
};

export default Session;
