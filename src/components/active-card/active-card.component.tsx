import React from 'react';
import {
  Container,
  Title,
  Description,
  InfoWrap,
  UserWrap,
  Avatar,
  Stats,
  StatWrap,
  UserStat,
} from './active-card.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useColorScheme} from 'react-native';

const ActiveCard = () => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Container inDarkMode={inDarkMode}>
      <Title inDarkMode={inDarkMode}>Startup Club</Title>
      <Description>
        {"Pitch your startup ideas to VC's & top Entrepreneurs"}
      </Description>
      <InfoWrap>
        <UserWrap>
          <Avatar
            source={require('../../assets/images/2.png')}
            background="#fee9a7"
          />
          <Avatar
            source={require('../../assets/images/3.png')}
            background="#c2f1c3"
          />
          <Avatar
            source={require('../../assets/images/4.png')}
            background="#ddd2fb"
          />
        </UserWrap>
        <Stats inDarkMode={inDarkMode}>
          <StatWrap>
            <Icon
              name="user"
              color={inDarkMode ? '#ffffff' : '#000000'}
              size={10}
              solid
            />
            <UserStat inDarkMode={inDarkMode}>354</UserStat>
          </StatWrap>

          <StatWrap>
            <Icon
              name="microphone"
              color={inDarkMode ? '#ffffff' : '#000000'}
              size={10}
            />
            <UserStat inDarkMode={inDarkMode}>17</UserStat>
          </StatWrap>
        </Stats>
      </InfoWrap>
    </Container>
  );
};

export default ActiveCard;
