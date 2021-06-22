import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #5d60ef;
`;

export const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextWrapper = styled.View`
  display: flex;
`;

export const Bar = styled.View`
  height: 40px;
  border-right-width: 2px;
  border-right-color: #c9859b;
  margin-right: 15px;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-weight: 600;
  color: #ffffff;
`;

export const Time = styled.Text`
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 3px;
`;
