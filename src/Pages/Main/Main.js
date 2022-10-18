import React from "react";
import { MainContainer } from "./MainStyle";
import { useRecoilValue } from "recoil";
import { loginState } from "Atom";

function Main() {
  const loginInfo = useRecoilValue(loginState);
  const username = loginInfo.userName;
  return (
    <MainContainer>
      <div className="main">
        <p>{username}님의 행복한 기억을 모아두었어요.</p>
        <img src="./mainpig.png" alt="img" />
      </div>
    </MainContainer>
  );
}

export default Main;
