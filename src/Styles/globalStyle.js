import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
a{
  color: ${theme.primary}
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180.45deg,
    ${theme.violet} 1.69%,
    ${theme.blue} 99.25%
  );
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
`;

export default GlobalStyle;
