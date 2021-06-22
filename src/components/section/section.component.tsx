import React from 'react';
import {useColorScheme} from 'react-native';
import {Container, Title} from './section.styles';
7;

const Section: React.FC<{title: string}> = ({title, children}) => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Container>
      <Title inDarkMode={inDarkMode}>{title}</Title>
      {children}
    </Container>
  );
};

export default Section;
