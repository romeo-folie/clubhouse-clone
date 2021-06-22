import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{background?: string}>`
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  background-color: ${({background}) => (background ? background : '#ffffff')};
  border-radius: 20px;
  min-width: 90px;
`;

export const Content = styled.Text<{inDarkMode: boolean}>`
  font-size: 15px;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
`;
