import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Platform } from 'react-native';

import {
  Container,
  Content,
  ContentInfo,
  InfoDescription,
  FormulaContent,
  FormulaTitle,
  FormulaDescription
} from './styles';

export function InfoScreen() {

  return (
    <Container>
      <Content>
        <ContentInfo>
          <InfoDescription>
            Esse exame é responsável por identificar os distúrbios ácido-base, que são acometimentos que demandam condutas enérgicas do médico que está a frente do caso.  O aparelho de gasometria mede o pH e os gases sanguíneos sob a forma de pressão parcial do gás (pO2 e pCO2), ao passo que os demais parâmetros são calculados.
          </InfoDescription>
          <FormulaContent>
            <FormulaTitle>Formula:</FormulaTitle>
            <FormulaDescription>PaCO2 = (1,5 x HCO3) + 8</FormulaDescription>
          </FormulaContent>
        </ContentInfo>
      </Content>
    </Container>
  );
}

/*
  HCO3: mEq/L
  * Utiliza a Equação de Winter. Usada para avaliar a resposta compensatória na Acidose Metabólica
  * Formula: PaCO2 = (1.5 x HCO3) + 8
*/ 