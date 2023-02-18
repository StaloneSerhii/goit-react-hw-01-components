import styled from '@emotion/styled';

export const Transaction = styled.table`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-collapse: collapse;
  margin-top: 40px;
  thead {
    border: 1px solid black;
    background-color: #00bcd5;
    padding: 10px 96px;
    tr {
      th {
        padding-left: 10px;
      }
    }
  }
`;

export const TransactionTable = styled.tbody`
  background-color: gainsboro;
  border: 1px solid black;
  tr {
    td {
      border: 1px solid gray;
      padding: 10px 34px;
      color: gray;
    }
  }
`;
