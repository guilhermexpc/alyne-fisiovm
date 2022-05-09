import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface props {
  lineIndex: number
}

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

export const TableContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const TableContent = styled.View`  
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
`

export const TableValue = styled.View`
  width: 25%;
  align-items: center;
`;


export const TableResult = styled.View`
  width: 25%;
  padding: 0px 16px;
  align-items: flex-end;
  
`;

export const TableContent2 = styled.View<props>`  
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.lineIndex == 0 ? ({ theme }) => theme.colors.background_primary : ({ theme }) => theme.colors.background_secondary}; 
`

export const TableValue2 = styled.View`
  width: 25%;
  padding: 0px 8px;
  align-items: center;
  justify-content: center;
`;

export const TableResult2 = styled.View`
  width: 25%;
  /* padding: 0px 16px; */
  align-items: center;
  justify-content: center;  
`;

export const TableDescription = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.details}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.cartMenu};
  text-align: justify;
`;

export const TableDescription2 = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.details}px;
  font-family: ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.subTitle};
  text-align: justify;
`;
