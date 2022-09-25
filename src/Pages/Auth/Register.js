import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ~~~ firebase ~~~ */
import { authService } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

/* ~~~ style ~~~ */
import { Container } from "Styles/globalStyle";
import { AuthContainer, AuthInput, AuthBtn } from "./AuthStyle";
import { FaEnvelope } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [registerUsername, setRegisterUsername] = useState();
  const navigate = useNavigate();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setRegisterEmail(value);
      console.log(value);
    } else if (name === "password") {
      setRegisterPassword(value);
    } else if (name === "username") {
      setRegisterUsername(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(
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
      console.log(error);
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
              required
            />
          </div>
          <div className="input__auth">
            <div className="icon">
              <FaEnvelope size="20" color="grey" />
            </div>
            <AuthInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChange}
              required
            />
          </div>
          <div className="input__auth">
            <div className="icon">
              <FaEnvelope size="20" color="grey" />
            </div>
            <AuthInput
              type="text"
              name="username"
              placeholder="닉네임을 입력해주세요"
              onChange={onChange}
              required
            />
          </div>
          <AuthBtn type="submit" onClick={onSubmit}>
            회원가입
          </AuthBtn>
          <div className="link">
            <span>로그인 하러가기</span>
            <BiRightArrowAlt size={24} />
            <Link to="/login">
              <span>Sign in</span>
            </Link>
          </div>
        </form>
      </AuthContainer>
    </Container>
  );
}
