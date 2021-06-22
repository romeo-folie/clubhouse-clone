import React from 'react';
import {
  Container,
  TitleWrapper,
  TextWrapper,
  Bar,
  Title,
  Time,
} from './upcoming-card.styles';
import Icon from 'react-native-vector-icons/EvilIcons';

const UpcomingCard = () => {
  return (
    <Container>
      <TitleWrapper>
        <Bar />
        <TextWrapper>
          <Time>10:00 - 20:00</Time>
          <Title>Design talks and chill</Title>
        </TextWrapper>
      </TitleWrapper>
      <Icon name="chevron-down" size={30} color="#ffffff" />
    </Container>
  );
};

export default UpcomingCard;
