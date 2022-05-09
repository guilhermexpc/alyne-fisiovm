import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from '../../../components/Header';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import { PaCO2EsperadaAcidoseFormula } from '../../../calculations/formulas';
import { FormulaScreen } from './FormulaScreen'
import { InfoScreen } from './InfoScreen'
import { TableScreen } from './TableScreen'


import {
  Container,
} from './styles';

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