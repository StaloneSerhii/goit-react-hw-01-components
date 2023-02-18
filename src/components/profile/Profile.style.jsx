import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  img {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
  }
`;

export const ProfileStyle = styled.div`
  color: gray;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ImgStyle = styled.div`
  border-radius: 100%;
`;
export const NameStlye = styled.p`
  color: black;
  font-weight: 700;
`;
export const Stats = styled.span`
  padding-top: 10px;
  color: black;
  font-weight: 600;
`;
export const ListStat = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px;
  background-color: gainsboro;
  margin: 0;
  border: 1px solid black;
  li {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
