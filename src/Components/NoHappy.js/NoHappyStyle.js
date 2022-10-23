import styled from "styled-components";
import theme from "Styles/theme";

export const NoHappyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoHappyExplain = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0px;
  width: 300px;
  height: 200px;
  background: #ffff;
  border-radius: 10px;
  color: ${theme.blue};
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .p1 {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .p2 {
    font-size: 16px;
  }
`;

export const GotoCreateButton = styled.button`
  width: 50%;
  height: 25%;
  background-color: ${theme.detailTitle};
  border: none;
  border-radius: 5px;
  color: #ffff;
  font-weight: 700;
  :hover {
    background-color: white;
    color: ${theme.blue};
    background-color: ${theme.violet};
    font-weight: 900;
  }
`;
