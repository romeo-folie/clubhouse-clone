import styled from 'styled-components/native';

export const Greeting = styled.Text<{inDarkMode: boolean}>`
  font-size: 20px;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
  font-weight: 600;
`;

export const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  margin-bottom: 70px;
`;

export const Row = styled.View<{marginTop?: number; marginBottom?: number}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({marginTop}) => (marginTop ? marginTop + 'px' : 0)};
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? marginBottom + 'px' : 0};
`;

export const Avatar = styled.Image`
  height: 18px;
  width: 18px;
  border-radius: 50px;
  padding: 18px;
  background-color: #5d60ef;
  margin-left: 10px;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
