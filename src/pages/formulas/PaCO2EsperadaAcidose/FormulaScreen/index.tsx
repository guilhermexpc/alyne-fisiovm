import React, { useState } from 'react';
import { Button, Platform, Text } from 'react-native';
import { PaCO2EsperadaAcidoseFormula } from '../../../../calculations/formulas';
import { ContainerMain } from '../../../../components/ContainerMain';

import {
  Content,
  ContentButton,
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
    <ContainerMain>
      <Content>
        <ContentFormula>
          <InputFormula
            value={HCO3}
            onChangeText={setHCO3}
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          />



          <ResultContent>
            {result.length > 0 && (
              <>
                <Text>PaCO</Text>
                <Text style={{ fontSize: 12, lineHeight: 27 }}>2</Text>
                <Text> Esperada</Text>
                <Text>{` = ${result} mmHg`}</Text>
              </>
            )}
          </ResultContent>
        </ContentFormula>
        <ContentButton>
          <Button
            title="calcular"
            onPress={() => {
              Calculate(parseFloat(HCO3));
            }}
          />
        </ContentButton>

      </Content>
    </ContainerMain>
  );
}

/*
  HCO3: mEq/L
  * Utiliza a Equação de Winter. Usada para avaliar a resposta compensatória na Acidose Metabólica
  * Formula: PaCO2 = (1.5 x HCO3) + 8
*/
