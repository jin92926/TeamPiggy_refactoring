import styled from "styled-components";
import { Input, Button, Container } from "Styles/globalStyle";
import theme from "Styles/theme";

/* ~~~ Login & Register public style ~~~ */
export const AuthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1140px; */
  z-index: 1;
  header {
    margin: 30px 0;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
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
      justify-content: center;
      span {
        line-height: 20px;
      }
      a {
        span {
          color: ${theme.blue};
          font-weight: 600;
        }
      }
    }
    .error-msg {
      color: red;
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
  border: 1px solid red;
  width: 400px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in;
  > span {
    padding: 0 10px;
  }
  @media screen and (max-width: 500px) {
    width: 320px;
    transition: 1s ease-in;
  }
`;
