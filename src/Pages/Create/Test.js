import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  color: aliceblue;
  @media ${({ theme }) => theme.desktop} {
  }
`;

function Test() {
  return <Container>Test</Container>;
}

export default Test;
