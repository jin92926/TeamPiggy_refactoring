import DetailItem from "Components/DetailItem/DetailItem";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  deleteDoc,
} from "firebase/firestore";
import { dbService } from "../../firebase";

const FoundItem = () => {
  const { id } = useParams();
  const [foundObj, setFoundObj] = useState({});

  useEffect(() => {
    const get = async () => {
      const docRef = doc(dbService, "서희", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.data) {
        console.log("Document data:", docSnap.data());
        setFoundObj(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    get();
  }, []);

  return (
    <DetailItem
      title={foundObj.제목}
      date={foundObj.날짜}
      weather={foundObj.날씨}
      url={foundObj.url}
      content={foundObj.내용}
      type={"found"}
      id={id}
    />
  );
};

export default FoundItem;
