import { useState, React, useEffect } from "react";
import DetailItem from "Components/DetailItem/DetailItem";
import { useRecoilValue } from "recoil";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "../../firebase";
import { loginState } from "Atom";
import { useParams } from "react-router-dom";

function DrewItem() {
  const [isLoading, setIsLoading] = useState(true);
  const [happy, setHappy] = useState();
  const userInfo = useRecoilValue(loginState);
  const { id } = useParams();

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
        if (randomHappy.id === id) {
          setHappy(randomHappy);
          setIsLoading(false);
        }
      });
    });
  }, []);

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
          id={id}
        />
      )}
    </>
  );
}

export default DrewItem;
