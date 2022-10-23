import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ~~~ firebase ~~~ */
import { authService } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

/* ~~~ style ~~~ */
import { Container } from "Styles/globalStyle";
import { AuthContainer, AuthInput, AuthBtn } from "./AuthStyle";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Register() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isUsername, setIsUsername] = useState(false);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      const emailRegex =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      const emailCurrent = value.trim();
      setRegisterEmail(emailCurrent);
      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("이메일 형식으로 입력하세요. ");
      } else if (value.length < 5) {
        setEmailMessage("5자 이상 입력하세요.");
        setIsEmail(false);
      } else if (value.includes(" ")) {
        setEmailMessage("이메일은 공백이 포함될 수 없습니다.");
        setIsEmail(false);
      } else {
        setEmailMessage("");
        setIsEmail(true);
      }
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.+[a-zA-Z0-9])(?=.+[`~!@#$%^&*|₩'";:_-])(?=.+[a-zA-Z0-9]).{5,24}$/;
      const passwordCurrent = value.trim();
      setRegisterPassword(passwordCurrent);
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "비밀번호는 영문자와 숫자, 특수문자를 포함해 5글자 이상 입력하세요."
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("");
        setIsPassword(true);
      }
    } else if (name === "confirm") {
      setRegisterPasswordConfirm(value.trim());
      if (registerPassword !== value.trim()) {
        setConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsConfirmed(false);
      } else {
        setConfirmMessage("");
        setIsConfirmed(true);
      }
    } else if (name === "username") {
      setRegisterUsername(value.trim());
      if (value.length < 4 || value.length > 15) {
        setUsernameMessage("닉네임은 4~15자 사이로 입력하세요.");
        setIsUsername(false);
      } else if (value.includes(" ")) {
        setUsernameMessage("닉네임은 공백이 포함될 수 없습니다.");
        setIsUsername(false);
      } else {
        setUsernameMessage("");
        setIsUsername(true);
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isEmail && isPassword && isConfirmed && isUsername) {
      try {
        await createUserWithEmailAndPassword(
          authService,
          registerEmail,
          registerPassword
        ); // 계정 만들기
        await updateProfile(authService.currentUser, {
          displayName: registerUsername,
        }); //displayName 추가
        alert("회원가입 성공");
        navigate("/login");
      } catch (error) {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          setEmailMessage(
            "이미 등록된 이메일입니다. 다른 이메일을 입력하세요."
          );
        }
      }
    } else {
      alert("정보를 올바르게 입력하세요");
    }
  };

  return (
    <Container>
      <AuthContainer>
        <header>
          <h2>Piggy create account</h2>
        </header>
        <form className="form__auth">
          <div className="input__auth">
            <div className="icon">
              <FaEnvelope size="20" color="grey" />
            </div>
            <AuthInput
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
          <span className="error-msg">{emailMessage}</span>
          <div className="input__auth">
            <div className="icon">
              <FaLock size="20" color="grey" />
            </div>
            <AuthInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChange}
              required
            />
          </div>
          <span className="error-msg">{passwordMessage}</span>
          <div className="input__auth">
            <div className="icon">
              <FaLock size="20" color="grey" />
            </div>
            <AuthInput
              type="password"
              name="confirm"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              onChange={onChange}
              required
            />
          </div>
          <span className="error-msg">{confirmMessage}</span>
          <div className="input__auth">
            <div className="icon">
              <FaEnvelope size="20" color="grey" />
            </div>
            <AuthInput
              type="text"
              name="username"
              placeholder="닉네임을 입력해주세요"
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
          <span className="error-msg">{usernameMessage}</span>
          <AuthBtn type="submit" onClick={onSubmit}>
            회원가입
          </AuthBtn>
          <div className="link">
            <span>로그인 하러가기</span>
            <BiRightArrowAlt size={24} color="skyblue" />
            <Link to="/login">
              <span>Sign in</span>
            </Link>
          </div>
        </form>
      </AuthContainer>
    </Container>
  );
}
