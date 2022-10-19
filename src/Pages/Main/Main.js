import React from "react";
import { MainContainer, HappyBoxBtn } from "./MainStyle";
import { useRecoilValue } from "recoil";
import { loginState } from "Atom";

function Main() {
  const loginInfo = useRecoilValue(loginState);
  const username = loginInfo.userName;
  return (
    <MainContainer>
      <div className="main">
        <p>PIGGY에 오신 걸 환영합니다!</p>
        <p>{username}님의 행복한 기억을 모아두었어요.</p>
        <HappyBoxBtn>
          <p>CLICK</p>
          <img src="./mainpig.png" alt="img" />
        </HappyBoxBtn>
      </div>
    </MainContainer>
  );
}

export default Main;
