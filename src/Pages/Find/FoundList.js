import { useEffect, useState } from "react";
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
import { ItemContainer, ItemTile, ItemDate } from "./FindStyle";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function FoundList() {
  const [happyArr, setHappyArr] = useState([]);
  const navigate = useNavigate();
  const [limit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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

  const selecteHandler = (id) => {
    navigate(`/find/${id}`);
  };
  console.log(happyArr);

  return (
    <>
      {happyArr &&
        happyArr.slice(offset, offset + limit).map((el) => (
          <ItemContainer key={el.id} onClick={() => selecteHandler(el.id)}>
            <ItemTile>{el.제목}</ItemTile>
            <ItemDate>
              {el.날짜.toDate().toLocaleDateString().slice(0, 12)}
            </ItemDate>
          </ItemContainer>
        ))}
      <footer>
        <Pagination
          total={happyArr.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
}

export default FoundList;
