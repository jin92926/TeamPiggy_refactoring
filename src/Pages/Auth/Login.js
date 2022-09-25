import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ~~~ firebase ~~~ */
import { authService } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

/* ~~~ style ~~~ */
import { Container } from "Styles/globalStyle";
import { AuthContainer, AuthInput, AuthBtn, LoginSocialBtn } from "./AuthStyle";
import { GoogleIconSvg, GithubIconSvg } from "Assets/Svg";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState(""); //id
  const [loginPassword, setLoginPassword] = useState(""); //pw
  const navigate = useNavigate();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setLoginEmail(value);
      //console.log("email: ", value);
    } else if (name === "password") {
      setLoginPassword(value);
      //console.log("password: ", value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        loginEmail,
        loginPassword
      ); // 로그인
      alert("로그인 성공");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <AuthContainer>
        <header>
          <h2>Piggy Login</h2>
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
          <AuthBtn type="submit" onClick={onSubmit}>
            로그인
          </AuthBtn>
          <div className="link">
            <span>회원가입 하러가기</span>
            <BiRightArrowAlt size={24} />
            <Link to="/signup">
              <span>Create account</span>
            </Link>
          </div>
        </form>
        <div className="button__login">
          <LoginSocialBtn name="google">
            <GoogleIconSvg />
            google login
          </LoginSocialBtn>
          <LoginSocialBtn name="github">
            <GithubIconSvg />
            github login
          </LoginSocialBtn>
        </div>
      </AuthContainer>
    </Container>
  );
}
