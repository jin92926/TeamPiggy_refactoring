import DetailItem from "Components/DetailItem/DetailItem";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { loginState } from "Atom";
import { useRecoilValue } from "recoil";

const FoundItem = () => {
  const { id } = useParams();
  const [foundObj, setFoundObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = useRecoilValue(loginState);

  useEffect(() => {
    const get = async () => {
      const docRef = doc(dbService, userInfo.userName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.data) {
        setFoundObj(docSnap.data());
        setIsLoading(false);
      } else {
        console.log("No such document!");
      }
    };
    get();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <DetailItem
          title={foundObj.제목}
          date={foundObj.날짜}
          weather={foundObj.날씨}
          url={foundObj.url}
          content={foundObj.내용}
          type={"found"}
          id={id}
        />
      )}
    </>
  );
};

export default FoundItem;
