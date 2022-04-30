import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  background-color: ${({ theme }) => theme.colors.primarySoft};
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primaryTint};
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.primaryTint};
`

export const Description = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.primaryTint};
`

export const Details = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.details};
  color: ${({ theme }) => theme.colors.primaryTint};
`