import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ~~~ firebase ~~~ */
import { authService } from "../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

/* ~~~ style ~~~ */
import { Container } from "Styles/globalStyle";
import { AuthContainer, AuthInput, AuthBtn, LoginSocialBtn } from "./AuthStyle";
import { GoogleIconSvg, GithubIconSvg } from "Assets/Svg";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { loginState } from "Atom";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState(""); //id
  const [loginPassword, setLoginPassword] = useState(""); //pw
  const [authState, setAuthState] = useRecoilState(loginState);

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setLoginEmail(value);
      if (value === "") {
        setEmailMessage("이메일이 빈 칸입니다. 올바르게 입력하세요");
        setIsEmail(false);
      } else {
        setEmailMessage("");
        setIsEmail(true);
      }
    } else if (name === "password") {
      setLoginPassword(value);
      if (value === "") {
        setEmailMessage("비밀번호가 빈 칸입니다. 올바르게 입력하세요");
        setIsPassword(false);
      } else {
        setEmailMessage("");
        setIsPassword(true);
      }
    }
  };

  //일반 로그인
  const onSubmit = async (event) => {
    event.preventDefault();
    if (isEmail && isPassword) {
      try {
        const auth = await signInWithEmailAndPassword(
          authService,
          loginEmail,
          loginPassword
        );
        if (auth.user) {
          console.log("authuser: ", auth.user);
          setAuthState({
            isLogin: true,
            userName: auth.user.displayName,
          });
        }
        alert("로그인 성공");
        navigate("/");
      } catch (error) {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          setEmailMessage(
            "이메일 주소가 유효하지 않습니다. 이메일을 올바르게 입력하세요"
          );
        } else if (error.code === "auth/wrong-password") {
          setPasswordMessage(
            "잘못된 비밀번호입니다. 비밀번호를 올바르게 입력하세요"
          );
        }
      }
    } else {
      alert("정보를 올바르게 입력하세요");
    }
  };

  //소셜 로그인
  const onSubmitSocial = async (event) => {
    const {
      currentTarget: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
      navigate("/");
    } else if (name === "github") {
      provider = new GithubAuthProvider();
      navigate("/");
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data.user);
    setAuthState({
      isLogin: true,
      userName: data.user.displayName,
    });
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
              autoComplete="off"
              required
            />
          </div>
          <span className="error-msg">{passwordMessage}</span>
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
          <LoginSocialBtn name="google" onClick={onSubmitSocial}>
            <GoogleIconSvg />
            <span>GOOGLE LOGIN</span>
          </LoginSocialBtn>
          <LoginSocialBtn name="github" onClick={onSubmitSocial}>
            <GithubIconSvg />
            <span>GITHUB LOGIN</span>
          </LoginSocialBtn>
        </div>
      </AuthContainer>
    </Container>
  );
}
