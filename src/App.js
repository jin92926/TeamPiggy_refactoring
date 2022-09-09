import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "Pages/Main/Main";
import Login from "Pages/Register/Login";
import Singup from "Pages/Register/Singup";
import Create from "Pages/Create/Create";
import CreatedItem from "Pages/Create/CreatedItem ";
import Draw from "Pages/Draw/Draw";
import DrewItem from "Pages/Draw/DrewItem";
import Find from "Pages/Find/Find";
import FoundItem from "Pages/Find/FoundItem";
import Profile from "Pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/create/:id" element={<CreatedItem />} />
        <Route path="/draw" element={<Draw />} />
        <Route path="/draw/:id" element={<DrewItem />} />
        <Route path="/find" element={<Find />} />
        <Route path="/find/:id" element={<FoundItem />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
