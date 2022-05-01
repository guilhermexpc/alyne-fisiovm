import React from 'react';
import { Text, ScrollView } from 'react-native';

import { Header } from '../../components/Header';

import { CardMenu } from '../../components/CardMenu';

import {
  Container,
  Content,
  Item,
  Title,
  SubTitle,
  Description,
  Details,
  Item2,
  Item3
} from './styles';

export function Home() {
  return (
    <Container>
      <Header
        Title='Bem Vindo Alyne'
      />
      <Content>
        <CardMenu
          title='Gasometria Arterial '
          onPress={() => { }}
        />
        <CardMenu
          title='PaCO2 Esperada - Acidose'
          onPress={() => { }}
        />
        <CardMenu
          title='Anion Gap'
          onPress={() => { }}
        />
      </Content>
    </Container>
  );
}


{/* <Item>
          <Item2>
            <Item3 />
          </Item2>
        </Item> */}
