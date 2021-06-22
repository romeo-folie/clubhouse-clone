import styled from 'styled-components/native';

export const Title = styled.Text<{inDarkMode: boolean}>`
  font-size: 16px;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
  margin-bottom: 12px;
  font-weight: 600;
`;

export const Container = styled.View`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
`;
