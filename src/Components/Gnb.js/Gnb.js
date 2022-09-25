import styled from "styled-components";

export default function Gnb() {
  return (
    <GnbContainer>
      <button>햄버거바메뉴</button>
    </GnbContainer>
  );
}

const GnbContainer = styled.div`
  width: 100%;
  position: fixed;
`;
