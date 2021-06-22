import styled from 'styled-components/native';

interface Props {
  inDarkMode: boolean;
}

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Avatar = styled.Image<{color: string}>`
  height: 30px;
  width: 30px;
  border-radius: 150px;
  padding: 45px;
  position: relative;
  background-color: ${({color}) => color};
`;

export const NameRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const Name = styled.Text<Props>`
  font-size: 15px;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
  margin-left: 5px;
`;

export const LeftIconWrap = styled.View<Props>`
  position: absolute;
  border-radius: 50px;
  padding: 5px;
  left: 0;
  bottom: 25px;
  background-color: ${({inDarkMode}) =>
    inDarkMode ? 'rgba(0, 0, 0, 0.45)' : '#ffffff'};
`;

export const RightIconWrap = styled.View<Props>`
  position: absolute;
  border-radius: 50px;
  padding: 5px;
  right: 0;
  bottom: 25px;
  background-color: ${({inDarkMode}) =>
    inDarkMode ? 'rgba(0, 0, 0, 0.45)' : '#ffffff'};
`;

export const CelebText = styled.Text`
  font-size: 13px;
`;

export const Ice = styled.Image`
  height: 14px;
  width: 14px;
`;
