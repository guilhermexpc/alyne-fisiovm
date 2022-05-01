import styled from 'styled-components/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';


export const Container = styled.View`
  width: 49%;      
  flex-direction: row;
  align-items: flex-start;
  
  justify-content: space-between;
  padding: 4px 4px 4px 6px;
  border-radius: 12px;
  margin-bottom: 8px;  
  
  background-color: ${({ theme }) => theme.colors.cartMenu};
`;

export const Button = styled(RectButton)`
  flex: 1;  
  height: 100%;
  max-height: 64px;
  justify-content: center;

`
export const Info = styled(BorderlessButton)`  
  width: 24px;
  height: 24px;    
  align-items: center;  
`

export const InfoIcon = styled(Entypo)`
  font-size: 20px;  
  color: ${({ theme }) => theme.colors.title};
`;

export const DescriptionContent = styled.View`
  width: 100%;  
`

export const Title = styled.Text`
  font-size:  ${({ theme }) => theme.fontSize.CartMenu.title}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.title};    
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.subTitle};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.CartMenu.description)}px;
  font-family: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.subTitle};
`;

export const Details = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.details};
  color: ${({ theme }) => theme.colors.subTitle};
`;
