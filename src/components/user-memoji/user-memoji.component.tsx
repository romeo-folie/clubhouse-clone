import React from 'react';
import {useColorScheme} from 'react-native';
import {
  Container,
  Avatar,
  Name,
  NameRow,
  LeftIconWrap,
  RightIconWrap,
  CelebText,
  Ice,
} from './user-memoji.styles';

interface Props {
  name: string;
  speaker: boolean;
  color: string;
  path: string;
}

const UserMemoji: React.FC<Props> = ({name, speaker, color, path}) => {
  const inDarkMode = useColorScheme() === 'dark';

  return (
    <Container>
      <Avatar source={path} color={color} />
      <LeftIconWrap inDarkMode={inDarkMode}>
        <CelebText>🎉</CelebText>
      </LeftIconWrap>
      <RightIconWrap inDarkMode={inDarkMode}>
        <CelebText>🎙</CelebText>
      </RightIconWrap>
      <NameRow>
        {speaker ? (
          <Ice source={require('../../assets/images/ice.png')} />
        ) : null}
        <Name inDarkMode={inDarkMode}>{name}</Name>
      </NameRow>
    </Container>
  );
};

export default UserMemoji;
