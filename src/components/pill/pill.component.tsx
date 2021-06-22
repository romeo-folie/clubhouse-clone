import React from 'react';
import {useColorScheme} from 'react-native';
import {Container, Content} from './pill.styles';

interface Props {
  content: string;
  bg?: string;
}

const Pill: React.FC<Props> = ({content, bg}) => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Container background={bg}>
      <Content inDarkMode={inDarkMode}>{content}</Content>
    </Container>
  );
};

export default Pill;
