import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`  
  flex:1;
  align-items: center;  
  justify-content: center;
  padding: 8px 10px 0px; 
`;

export const ContentInfo = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const InfoDescription = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.details}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.subTitle};
  text-align: justify;
`;

export const FormulaContent = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_tertiary};
`;

export const FormulaTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.details}px;
  font-family: ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.subTitle};
`;

export const FormulaDescription = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.details}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.subTitle};
`;
