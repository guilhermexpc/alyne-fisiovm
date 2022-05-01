import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  
  flex-direction: row;
  flex-wrap: wrap;  
  justify-content: space-between;    
  padding: 14px 10px 0px;  
  `;

export const Item = styled.View`
  width: 48%;
  max-height: 64px;
  background-color: lightgray;
  margin-bottom: 50px;
`

export const Item2 = styled.View`
  width: 32px;
  height: 100%;
  background-color: lightcyan;
  align-items: center;
  justify-content: center;
`

export const Item3 = styled.View`
  width: 28px;
  height: 28px;
  background-color: lightgreen;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.subTitle};
`;

export const Description = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.subTitle};
`;

export const Details = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.details};
  color: ${({ theme }) => theme.colors.subTitle};
`;
