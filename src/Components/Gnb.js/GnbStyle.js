import styled from "styled-components";
import { Button } from "Styles/globalStyle";
import theme from "Styles/theme";

export const GnbContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .desktop {
    display: flex;
    align-items: center;
    color: ${theme.white};
    background-color: ${theme.blue};
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 500px) {
    .mobile {
      display: block;
      height: 70px;
      background-color: ${theme.blue_l};
      text-align: center;
      line-height: 70px;
      ul {
        display: flex;
        li {
          flex-grow: 1;
          .active {
            display: block;
            background-color: ${theme.blue};
          }
        }
      }
    }
  }
`;
export const NavMobileBtn = styled(Button)`
  background: none;
  box-shadow: none;
  width: 100%;
  img {
    width: 30px;
  }
`;

export const Logo = styled.div`
  img {
    width: 100px;
    padding: 5px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;
export const Sidebar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: white;
  border: 1px solid ${theme.border};
  position: absolute;
  right: 0;
  z-index: 1001;
  .userinfo {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid ${theme.border};
  }
  .nav-desktop {
    ul {
      padding: 10px;
      text-align: center;
      li {
        padding: 20px;
        font-weight: 500;
      }
    }
  }
`;
export const GnbIcon = styled.div`
  width: 100%;
  padding: 20px;
  text-align: right;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
