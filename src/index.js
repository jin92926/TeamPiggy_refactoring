import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);
