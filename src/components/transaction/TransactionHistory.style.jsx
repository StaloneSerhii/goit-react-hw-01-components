import styled from '@emotion/styled';

export const Transaction = styled.table`
  display: flex;
  align-items: center;
  flex-direction: column;

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

export const TransactionTable = styled.table`
  background-color: gainsboro;
  border: 1px solid black;
  tr {
    td {
      padding: 10px 34px;
      color: gray;
    }
  }
`;
