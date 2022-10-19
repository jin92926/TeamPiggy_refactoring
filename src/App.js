import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Gnb />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/now" element={<CreatedItem />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/draw/:id" element={<DrewItem />} />
          <Route path="/find" element={<Find />} />
          <Route path="/find/:id" element={<FoundItem />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
