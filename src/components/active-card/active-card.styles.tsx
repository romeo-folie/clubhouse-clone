import styled from 'styled-components/native';

interface Props {
  inDarkMode: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  border-radius: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  background-color: ${({inDarkMode}) => (inDarkMode ? '#29292b' : '#ffffff')};
`;

export const Title = styled.Text<Props>`
  font-size: 18px;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
  text-transform: uppercase;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #838284;
  max-width: 80%;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const InfoWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrap = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.Image<{background: string}>`
  height: 15px;
  width: 15px;
  border-radius: 8px;
  margin-right: 5px;
  background-color: ${({background}) => (background ? background : '#ffffff')};
  padding: 13px;
`;

export const Stats = styled.View<Props>`
  background-color: ${({inDarkMode}) => (inDarkMode ? '#404182' : '#eff0f5')};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 77px;
`;

export const StatWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserStat = styled.Text<Props>`
  font-size: 12px;
  color: ${({inDarkMode}) => (inDarkMode ? '#ffffff' : '#000000')};
  margin-left: 5px;
`;
