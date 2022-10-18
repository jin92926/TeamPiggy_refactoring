import { useNavigate } from "react-router";
import { authService } from "../../firebase";
import { useRecoilState } from "recoil";
import { loginState } from "Atom";
import { GnbContainer } from "./GnbStyle";

export default function Gnb() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useRecoilState(loginState);
  const loginText = authState.isLogin ? "LOGOUT" : "LOGIN";
  console.log(authState.userName);

  const onSubmit = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "LOGOUT") {
      authService.signOut();
      setAuthState({
        isLogin: false,
        userName: "",
        authUser: null,
      });
      navigate("/login");
    } else {
      navigate("/login");
      console.log("click", loginText);
    }
  };

  return (
    <GnbContainer>
      <span>{authState.userName}</span>
      <button type="submit" name={loginText} onClick={onSubmit}>
        {loginText}
      </button>
    </GnbContainer>
  );
}
