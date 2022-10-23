import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContainer } from "./ProfileStyle";
import { dbService, authService } from "../../firebase";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginState } from "Atom";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  deleteDoc,
} from "firebase/firestore";
import { LogoutBtn } from "Components/Gnb.js/GnbStyle";

function Profile() {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginState);
  const [authState, setAuthState] = useRecoilState(loginState);
  const username = loginInfo.userName;
  const [profile, setProfile] = useState([]);
  // console.log("프로필: ", profile);

  const onSubmit = () => {
    authService.signOut();
    setAuthState({
      isLogin: false,
      userName: "",
      authUser: null,
    });
    navigate("/login");
  };

  useEffect(() => {
    const q = query(
      collection(dbService, loginInfo.userName),
      orderBy("날짜", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const happyArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfile(happyArr);
    });
  }, []);
  return (
    <ProfileContainer>
      <div className="profile__img">
        <img src="/mainpig.png" />
      </div>
      <div className="profile__userInfo">
        <p>이름: {username}</p>
        <p>내 행복 무게: {profile.length} kg</p>
      </div>
      <LogoutBtn type="submit" onClick={onSubmit}>
        LOGOUT
      </LogoutBtn>
    </ProfileContainer>
  );
}

export default Profile;
