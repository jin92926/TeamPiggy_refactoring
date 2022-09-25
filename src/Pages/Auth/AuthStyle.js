import styled from "styled-components";
import { Input, Button } from "Styles/globalStyle";
import theme from "Styles/theme";

/* ~~~ Login & Register public style ~~~ */
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1140px;
  header {
    margin: 30px 0;
  }
  .form__auth {
    display: flex;
    flex-direction: column;
    .input__auth {
      display: flex;
      border: 1px solid ${theme.border};
      border-radius: 5px;
      padding: 5px;
      margin: 3px 0;
      .icon {
        display: inline-block;
        padding: 7px 0;
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
  border: 1px solid ${theme.border};
  border-radius: 5px;
  color: #f2f2f2;
  background-color: skyblue;
  cursor: pointer;
`;
export const LoginSocialBtn = styled(Button)`
  background-color: ${(props) =>
    props.name === "google"
      ? "#f2f2f2"
      : props.name === "github"
      ? "#222222"
      : ""};
  color: ${(props) =>
    props.name === "google"
      ? "#222222"
      : props.name == "github"
      ? "#f2f2f2"
      : ""};
  padding: 15px;
  margin: 5px 0;
  width: 400px;
  border: none;
  border-radius: 50px;
`;
