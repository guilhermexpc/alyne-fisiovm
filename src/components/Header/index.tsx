import React from 'react';

import {
  Container,
  HeaderContent,
  HeaderTitle,
} from './styles';

interface HeaderProps {
  Title: string;
}

export function Header({ Title }: HeaderProps) {
  return (
    <Container>
      <HeaderContent>
        <HeaderTitle>{Title}</HeaderTitle>
      </HeaderContent>
    </Container>
  );
}