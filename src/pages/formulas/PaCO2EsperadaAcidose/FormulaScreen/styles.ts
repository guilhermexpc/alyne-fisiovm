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
  padding: 0px 10px 0px; 
`;

export const ContentFormula = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_tertiary};
`
export const InputFormula = styled(TextInput)`
  width: 80%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.description};
  font-size: ${RFValue(14)}px;
  
  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const ResultContent = styled.View`
    width: 75%;
    flex-direction: row;
    padding: 12px 18px;
    border-radius: 5px;
    margin-top: 12px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.shape};

  
`;