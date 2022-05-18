import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Header } from '../../../components/Header';
import { FormulaScreen } from './FormulaScreen';
import { InfoScreen } from './InfoScreen';
import {
  Container
} from './styles';
import { TableScreen } from './TableScreen';




export function PaCO2EsperadaAcidose() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Container>
      <Header Title='PaCO2 Esperada Acidose' />
      <Tab.Navigator>
        <Tab.Screen name="Formula" component={FormulaScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Tabela" component={TableScreen} />
      </Tab.Navigator>
    </Container>
  );
}

/*
  HCO3: mEq/L
  * Utiliza a Equação de Winter. Usada para avaliar a resposta compensatória na Acidose Metabólica
  * Formula: PaCO2 = (1.5 x HCO3) + 8
*/ 