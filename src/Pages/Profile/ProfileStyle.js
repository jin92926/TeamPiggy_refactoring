import styled from "styled-components";
import { Container } from "Styles/globalStyle";

export const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  .profile__img {
    img {
      width: 200px;
    }
  }
  .profile__userInfo {
    p {
      margin: 5px;
      font-size: 25px;
      text-align: center;
    }
  }
  button {
    z-index: 100; // 수정 필요
  }
`;
