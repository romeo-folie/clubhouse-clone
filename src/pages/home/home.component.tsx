import React from 'react';
import {ScrollView, useColorScheme} from 'react-native';
import {Container, Row, Greeting, Avatar, Actions} from './home.styles';
import Pill from '../../components/pill/pill.component';
import Section from '../../components/section/section.component';
import UpcomingCard from '../../components/upcoming-card/upcoming-card.component';
import ActiveCard from '../../components/active-card/active-card.component';
import Icon from 'react-native-vector-icons/EvilIcons';

const interests = [
  {title: '🎨  Art', bg: {dark: '#2d2532', light: '#ecebfb'}},
  {title: '🕹  Gaming', bg: {dark: '#262a35', light: '#f6d9dd'}},
  {title: '🏀  Sports', bg: {light: '#efe0da', dark: '#27160e'}},
  {title: '🚗  Cars', bg: {light: '#f8d4d6', dark: '#300d0c'}},
];

const Home = () => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Container>
      <Row>
        <Greeting inDarkMode={inDarkMode}>{'Good Morning,\nRomeo'}</Greeting>
        <Actions>
          <Icon
            name="search"
            size={30}
            color={inDarkMode ? '#ffffff' : '#000000'}
          />
          <Avatar source={require('../../assets/images/11.png')} />
        </Actions>
      </Row>
      <Row marginTop={25} marginBottom={15}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {interests.map((item, idx) => (
            <Pill
              content={item.title}
              key={idx}
              bg={inDarkMode ? item.bg.dark : item.bg.light}
            />
          ))}
        </ScrollView>
      </Row>
      <Section title="Upcoming">
        <UpcomingCard />
      </Section>
      <Section title="Happening now">
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
      </Section>
    </Container>
  );
};

export default Home;
