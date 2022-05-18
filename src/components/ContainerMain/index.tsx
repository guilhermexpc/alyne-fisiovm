import React from 'react';
import {
  Container,
  Content
} from './styles';




export function ContainerMain({ children }) {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
}