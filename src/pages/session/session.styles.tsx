import styled from 'styled-components/native';

interface Props {
  inDarkMode: boolean;
}

export const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  padding-top: 15px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Title = styled.Text<Props>`
  font-size: 18px;
  text-transform: uppercase;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
  font-weight: 700;
`;

export const UserList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 50px;
`;

export const Sheet = styled.View`
  height: 120px;
  width: 100%;
  background-color: #5d60ef;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: absolute;
  bottom: 0;
  align-items: center;
`;

export const Bar = styled.View`
  width: 30px;
  border-bottom-width: 3px;
  border-bottom-color: #ffffff;
  margin-top: 10px;
`;

export const InputRow = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 18px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Input = styled.TextInput`
  height: 45px;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  padding-left: 15px;
  font-size: 15px;
  color: #ffffff;
`;
