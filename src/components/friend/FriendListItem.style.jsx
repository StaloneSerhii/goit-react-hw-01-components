import styled from '@emotion/styled';

export const Online = styled.p`
  margin-left: 20px;
  text-align: center;
  color: #ff000000;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: ${({ status }) => {
    switch (status) {
      case 'isOnline':
        return 'green';
      case 'offline':
        return 'red';
      default:
        return 'grey';
    }
  }};
`;
