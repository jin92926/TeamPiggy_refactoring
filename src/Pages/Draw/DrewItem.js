import { useState, React, useEffect } from "react";

import Card from "./Card";
import DetailItem from "Components/DetailItem/DetailItem";
import { useRecoilValue } from "recoil";
import { createdObjAtom } from "../../Atom";
import { DivContainer1 } from "./DrawStyle";
import { useNavigate } from "react-router";
//
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
import { Link } from "react-router-dom";

function DrewItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [happyArr, setHappyArr] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, "서희"), orderBy("날짜", "desc"));
    onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHappyArr(arr);
    });
  }, []);

  const randomHappy = happyArr[Math.floor(Math.random() * happyArr.length)];
  console.log(randomHappy);
  const navigate = useNavigate();

  // const openModalHandler = (e) => {
  //   e.stopPropagation();
  //   navigate(`/draw/${randomHappy.id}`);
  //   setIsOpen(!isOpen);
  // };
  // console.log(randomHappy);

  // { title, date, weather, url, content, type, id }
  if (isOpen === true) {
    console.log("트루입니다");
  }

  return (
    <>
      {randomHappy === undefined ? (
        <div>로딩중</div>
      ) : (
        <DivContainer1>
          <div className="div3">
            {isOpen === false ? (
              <Card setIsOpen={setIsOpen} title={randomHappy.id} />
            ) : (
              <DetailItem
                title={randomHappy.제목}
                date={randomHappy.날짜}
                weather={randomHappy.날씨}
                url={randomHappy.url}
                content={randomHappy.내용}
                type="draw"
              />
            )}
          </div>
        </DivContainer1>
      )}
    </>
  );
}

export default DrewItem;
