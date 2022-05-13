import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { PaCO2EsperadaAcidoseFormula } from '../../../../calculations/formulas';

import {
  Container,
  Content,
  TableContainer,
  TableContent,
  TableContent2,
  TableValue,
  TableResult,
  TableValue2,
  TableResult2,
  TableDescription,
  TableDescription2
} from './styles';

interface DataTable {
  HCO3Value: string,
  result: string

}

export function TableScreen() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataTable[]>([]);

  function CreateTableData() {
    var newsData: DataTable[] = [];
    for (let index = 1; index <= 50; index++) {
      const newData: DataTable = {
        HCO3Value: index.toString(),
        result: PaCO2EsperadaAcidoseFormula(index)
      }
      newsData.push(newData);
    }
    setData(newsData);
  }


  useEffect(() => {
    setLoading(true)
    CreateTableData();
    setLoading(false);
  }, [])

  return (
    <Container>
      <Content>
        <TableContainer>
          <TableContent>
            <TableValue>
              <TableDescription>HCO3</TableDescription>
            </TableValue>
            <TableResult>
              <TableDescription>PaCO2(mmHg)</TableDescription>
            </TableResult>
          </TableContent>
          <FlatList
            data={data}
            keyExtractor={item => item.HCO3Value}
            renderItem={({ item }) => (
              <TableContent2 lineIndex={0}>
                <TableValue2 >
                  <TableDescription2>{item.HCO3Value}</TableDescription2>
                </TableValue2>

                <TableResult2>
                  <TableDescription2>{item.result}</TableDescription2>
                </TableResult2>
              </TableContent2>
            )}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
          />
        </TableContainer>
      </Content>
    </Container>
  );
}