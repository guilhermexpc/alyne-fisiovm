import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`  
  flex:1;
  align-items: center;  
  justify-content: center;
  padding: 0px 10px 0px; 
`;

export const ContentInfo = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_tertiary};
`

export const Description = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.subTitle};
`;