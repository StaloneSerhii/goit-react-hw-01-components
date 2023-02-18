import styled from '@emotion/styled';

export const StaticsStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 80px;
      height: 80px;
    }
  }
`;
