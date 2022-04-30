import React from 'react';
import { Text } from 'react-native';

import { Header } from '../../components/Header';

import {
  Container,
  Title,
  SubTitle,
  Description,
  Details
} from './styles';

export function Home() {
  return (
    <Container>
      <Header
        Title='Bem Vindo Alyne'
      />
      <Title>Titulo</Title>
      <SubTitle>Subtitulo</SubTitle>
      <Description>Descricao</Description>
      <Details>Details</Details>
    </Container>
  );
}