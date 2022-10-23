import styled from "styled-components";
import { Container, Button } from "Styles/globalStyle";

export const MainContainer = styled(Container)`
  .main {
    text-align: center;
    img {
      display: inline;
      width: 300px;
    }
  }
`;

export const HappyBoxBtn = styled(Button)`
  display: block;
  width: 100%;
  height: 300px;
  background: none;
  box-shadow: none;
  p {
    width: 300px;
    line-height: 300px;
    position: absolute;
    z-index: 1;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }
  img {
    position: relative;
  }
`;
