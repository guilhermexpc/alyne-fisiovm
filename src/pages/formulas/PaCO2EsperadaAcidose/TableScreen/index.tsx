import React from 'react';

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



export function TableScreen() {
  return (
    <Container>
      <Content>
        <TableContainer>
          <TableContent>
            <TableValue>
              <TableDescription>HCO3</TableDescription>
            </TableValue>
            <TableResult>
              <TableDescription>PaCO2</TableDescription>
            </TableResult>
          </TableContent>

          <TableContent2 lineIndex={0}>
            <TableValue2 >
              <TableDescription2>1</TableDescription2>
            </TableValue2>

            <TableResult2>
              <TableDescription2>10</TableDescription2>
            </TableResult2>
          </TableContent2>

          <TableContent2 lineIndex={1}>
            <TableValue2 >
              <TableDescription2>2</TableDescription2>
            </TableValue2>

            <TableResult2>
              <TableDescription2>15</TableDescription2>
            </TableResult2>
          </TableContent2>

          <TableContent2 lineIndex={0}>
            <TableValue2>
              <TableDescription2>3</TableDescription2>
            </TableValue2>

            <TableResult2>
              <TableDescription2>20</TableDescription2>
            </TableResult2>
          </TableContent2>

          <TableContent2 lineIndex={1}>
            <TableValue2>
              <TableDescription2>4</TableDescription2>
            </TableValue2>

            <TableResult2>
              <TableDescription2>25</TableDescription2>
            </TableResult2>
          </TableContent2>
        </TableContainer>
      </Content>
    </Container>
  );
}