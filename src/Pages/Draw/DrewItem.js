import { useState, React, useEffect } from "react";
import DetailItem from "Components/DetailItem/DetailItem";
import { useRecoilValue } from "recoil";

import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  deleteDoc,
} from "firebase/firestore";
import { dbService } from "../../firebase";
import { loginState } from "Atom";

function DrewItem() {
  const [isLoading, setIsLoading] = useState(true);
  const [happy, setHappy] = useState();
  const userInfo = useRecoilValue(loginState);
  const url = window.location.href;
  const selectedId = url.slice(url.lastIndexOf("/") + 1);

  console.log(selectedId);
  useEffect(() => {
    const q = query(
      collection(dbService, userInfo.userName),
      orderBy("날짜", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      arr.map((randomHappy) => {
        if (randomHappy.id === selectedId) {
          setHappy(randomHappy);
          setIsLoading(false);
        }
      });
    });
  }, []);

  console.log(happy);

  return (
    <>
      {isLoading === true ? (
        <div>로딩중</div>
      ) : (
        <DetailItem
          title={happy.제목}
          date={happy.날짜}
          weather={happy.날씨}
          url={happy.url}
          content={happy.내용}
          type="draw"
        />
      )}
    </>
  );
}

export default DrewItem;
