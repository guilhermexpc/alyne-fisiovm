import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import { Header } from '../../components/Header';
import { CardMenu } from '../../components/CardMenu';

import { globalStyles } from '../../theme/globalStyles';
import {
  Container,
  Content,
  Item,
  Title,
  SubTitle,
  Description,
  Details,
  Item2,
  Item3,
  CardContent
} from './styles';

export function Home() {

  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <Container>
      <Header
        Title='Bem Vindo Alyne'
      />
      <Content style={globalStyles.defalutContent}>
        <CardContent >
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
        </CardContent>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});