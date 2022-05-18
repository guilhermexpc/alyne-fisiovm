import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;  
  background-color: ${({ theme }) => theme.colors.background_tertiary};
  padding: 0px 10px;   

`;

export const Content = styled.View`  
  flex: 1;
  align-items: center;  
  justify-content: center;
  /* padding: 0px 10px 0px;    */
  background-color: ${({ theme }) => theme.colors.background_primary};

`;
