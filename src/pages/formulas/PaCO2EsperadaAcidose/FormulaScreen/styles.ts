import { TextInput } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;  
`

export const ContentFormula = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;    

`
export const ContentButton = styled.View`
  height: 32px;
  width: 100%;
  background-color: lightblue;
  margin-bottom: 4px;
`
export const InputFormula = styled(TextInput)`
  width: 90%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.description};
  font-size: ${RFValue(14)}px;
  
  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const ResultContent = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 12px 18px;
    border-radius: 5px;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;