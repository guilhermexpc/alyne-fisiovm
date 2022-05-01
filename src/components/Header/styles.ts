import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  /* min-height: 124px; */
  background-color: ${({ theme }) => theme.colors.header};    
  padding: 8px 16px 0px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.headerTitle};
  font-size: ${({ theme }) => RFValue(theme.fontSize.title)}px;
  font-family: ${({ theme }) => theme.fonts.title};
`
