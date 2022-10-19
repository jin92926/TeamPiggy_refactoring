import { useNavigate } from "react-router";
import { authService } from "../../firebase";
import { useRecoilState } from "recoil";
import { loginState } from "Atom";
import { GnbContainer, Logo, Sidebar, GnbIcon, NavMobileBtn } from "./GnbStyle";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Gnb() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useRecoilState(loginState);
  const [isSidebar, setIsSidebar] = useState(false);
  const loginText = authState.isLogin ? "LOGOUT" : "LOGIN";
  console.log(authState.userName);

  const onSidebar = () => {
    setIsSidebar(!isSidebar);
  };

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
    <>
      <GnbContainer>
        <div className="desktop">
          <Logo>
            <Link to="./">
              <img src="./symbol_logo.png" alt="img" />
            </Link>
          </Logo>
          <GnbIcon>
            <FaBars size={20} onClick={onSidebar}></FaBars>
          </GnbIcon>
        </div>
        <div className="mobile">
          <nav className="nav-mobile">
            <ul>
              <li>
                <NavLink
                  to="/create"
                  activeclassname="active"
                  onClick={() => setIsSidebar(false)}
                >
                  <NavMobileBtn>
                    <img src="./mainpig.png" alt="img" />
                    <p>모으기</p>
                  </NavMobileBtn>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/draw"
                  activeclassname="active"
                  onClick={() => setIsSidebar(false)}
                >
                  <NavMobileBtn>
                    <img src="./folder.png" alt="img" />
                    <p>뽑기</p>
                  </NavMobileBtn>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/find"
                  activeclassname="active"
                  onClick={() => setIsSidebar(false)}
                >
                  <NavMobileBtn>
                    <img src="./find.png" alt="img" />
                    <p>찾기</p>
                  </NavMobileBtn>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  activeclassname="active"
                  onClick={() => setIsSidebar(false)}
                >
                  <NavMobileBtn>
                    <img src="./setting.png" alt="img" />
                    <p>설정</p>
                  </NavMobileBtn>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </GnbContainer>
      {isSidebar ? (
        <Sidebar>
          <GnbIcon>
            <GrClose size={20} onClick={onSidebar}></GrClose>
          </GnbIcon>
          <div className="userinfo">
            <span>{authState.userName}</span>
            <button type="submit" name={loginText} onClick={onSubmit}>
              {loginText}
            </button>
          </div>
          <nav className="nav-desktop">
            <ul>
              <li>
                <NavLink to="/create" onClick={() => setIsSidebar(false)}>
                  모으기
                </NavLink>
              </li>
              <li>
                <NavLink to="/draw" onClick={() => setIsSidebar(false)}>
                  뽑기
                </NavLink>
              </li>
              <li>
                <NavLink to="/find" onClick={() => setIsSidebar(false)}>
                  찾기
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" onClick={() => setIsSidebar(false)}>
                  설정
                </NavLink>
              </li>
            </ul>
          </nav>
        </Sidebar>
      ) : null}
    </>
  );
}
