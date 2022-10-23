import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "Pages/Main/Main";
import Login from "Pages/Auth/Login";
import Register from "Pages/Auth/Register";
import Create from "Pages/Create/Create";
import CreatedItem from "Pages/Create/CreatedItem ";
import Draw from "Pages/Draw/Draw";
import DrewItem from "Pages/Draw/DrewItem";
import Find from "Pages/Find/Find";
import FoundItem from "Pages/Find/FoundItem";
import Profile from "Pages/Profile/Profile";
import GlobalStyle from "Styles/globalStyle";

//component
import Gnb from "Components/Gnb.js/Gnb";
import { useRecoilValue } from "recoil";
import { loginState } from "Atom";

function App() {
  const isLogin = useRecoilValue(loginState);
  console.log(isLogin);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Gnb />
        <Routes>
          <Route
            path="/login"
            element={isLogin.isLogin ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isLogin.isLogin ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/" element={<Main />} />
          <Route
            path="/create"
            element={isLogin.isLogin ? <Create /> : <Navigate to="/" />}
          />
          <Route path="/create/now" element={<CreatedItem />} />
          <Route
            path="/draw"
            element={isLogin.isLogin ? <Draw /> : <Navigate to="/" />}
          />
          <Route path="/draw/:id" element={<DrewItem />} />
          <Route
            path="/find"
            element={isLogin.isLogin ? <Find /> : <Navigate to="/" />}
          />
          <Route path="/find/:id" element={<FoundItem />} />
          <Route
            path="/profile"
            element={isLogin.isLogin ? <Profile /> : <Navigate to="/" />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
