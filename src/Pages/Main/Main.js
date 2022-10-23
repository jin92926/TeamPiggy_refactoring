import React, { useEffect } from "react";
import { MainContainer, HappyBoxBtn } from "./MainStyle";
import { useRecoilValue } from "recoil";
import { loginState } from "Atom";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginState);
  const username = loginInfo.userName;
  const isLogin = loginInfo.isLogin;
  useEffect(() => {
    if (!isLogin) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/login");
    }
  }, []);
  const handleClickHappy = () => {
    navigate("/create");
  };
  return (
    <MainContainer>
      <div className="main">
        <p>PIGGY에 오신 걸 환영합니다!</p>
        <p>{username}님의 행복한 기억을 모아두었어요.</p>
        <br />
        <p>🐱CLICK 버튼을 눌러 행복을 모아보세요🐱</p>
        <HappyBoxBtn onClick={handleClickHappy}>
          <p>CLICK</p>
          <img src="./mainpig.png" alt="img" />
        </HappyBoxBtn>
      </div>
    </MainContainer>
  );
}

export default Main;
