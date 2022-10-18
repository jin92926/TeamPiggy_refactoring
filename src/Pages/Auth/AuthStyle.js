import styled from "styled-components";
import { Input, Button, Container } from "Styles/globalStyle";
import theme from "Styles/theme";

/* ~~~ Login & Register public style ~~~ */
export const AuthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1140px; */
  background: linear-gradient(
    180.45deg,
    ${theme.violet} 1.69%,
    ${theme.blue} 99.25%
  );
  z-index: 1;
  header {
    margin: 30px 0;
  }
  .form__auth {
    display: flex;
    flex-direction: column;
    .input__auth {
      display: flex;
      border: 1px solid ${theme.violet};
      border-radius: 5px;
      padding: 5px;
      margin: 3px 0;
      background-color: white;
      .icon {
        display: inline-block;
        padding: 7px 0;
      }
    }
    .link {
      margin: 10px 0;
      display: flex;
      text-align: center;
      span {
        line-height: 20px;
      }
    }
  }
  .button__login {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
`;
export const AuthInput = styled(Input)`
  width: 300px;
  padding: 10px;
`;

export const AuthBtn = styled(Button)`
  padding: 10px;
  border: 1px solid ${theme.blue};
  border-radius: 5px;
  color: ${theme.white};
  background-color: ${theme.blue};
  cursor: pointer;
`;
export const LoginSocialBtn = styled(Button)`
  background-color: ${(props) =>
    props.name === "google"
      ? theme.white
      : props.name === "github"
      ? theme.primary
      : ""};
  color: ${(props) =>
    props.name === "google"
      ? theme.primary
      : props.name == "github"
      ? theme.white
      : ""};
  padding: 15px;
  margin: 5px 0;
  width: 400px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    padding: 0 10px;
  }
`;
