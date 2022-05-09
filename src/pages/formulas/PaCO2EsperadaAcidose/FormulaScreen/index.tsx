import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Platform } from 'react-native';

import { PaCO2EsperadaAcidoseFormula } from '../../../../calculations/formulas';

import {
  Container,
  Content,
  ContentFormula,
  InputFormula,
  ResultContent
} from './styles';

export function FormulaScreen() {
  const [HCO3, setHCO3] = useState('');
  const [result, setResult] = useState('');

  function Calculate(value: number) {
    console.log(PaCO2EsperadaAcidoseFormula(value));
    setResult(PaCO2EsperadaAcidoseFormula(value));
  }

  return (
    <Container>
      <Content>
        <ContentFormula>
          {/* <InputFormula
            value='{HCO3}'
            onChangeText={setHCO3}
            keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"}

          /> */}
          <Button
            title='calcular'
            onPress={() => { Calculate(parseFloat(HCO3)) }}
          />

          {
            result.length > 0 &&
            (
              <ResultContent>
                <Text >PaCO</Text>
                <Text style={{ fontSize: 12, lineHeight: 27 }}>2</Text>
                <Text> Esperada</Text>
                <Text>{` = ${result} mmHg`}</Text>
              </ResultContent>
            )
          }
        </ContentFormula>
      </Content>
    </Container>
  );
}

/*
  HCO3: mEq/L
  * Utiliza a Equação de Winter. Usada para avaliar a resposta compensatória na Acidose Metabólica
  * Formula: PaCO2 = (1.5 x HCO3) + 8
*/ 