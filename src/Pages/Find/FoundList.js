import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "../../firebase";
import { ItemContainer, ItemTile, ItemDate, ListContainer } from "./FindStyle";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { loginState } from "Atom";
import { useRecoilValue } from "recoil";
import NoHappy from "Components/NoHappy.js/NoHappy";

function FoundList() {
  const userInfo = useRecoilValue(loginState);
  const [happyArr, setHappyArr] = useState([]);
  const navigate = useNavigate();
  const [limit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
      setHappyArr(arr);
    });
  }, []);

  const selecteHandler = (id) => {
    navigate(`/find/${id}`);
  };
  console.log(happyArr);

  return (
    <>
      <ListContainer>
        {happyArr &&
          (happyArr.length < 1 ? (
            <NoHappy />
          ) : (
            happyArr.slice(offset, offset + limit).map((el) => (
              <ItemContainer key={el.id} onClick={() => selecteHandler(el.id)}>
                <ItemTile>{el.제목}</ItemTile>
                <ItemDate>
                  {el.날짜.toDate().toLocaleDateString().slice(0, 12)}
                </ItemDate>
              </ItemContainer>
            ))
          ))}
      </ListContainer>

      {happyArr && happyArr.length >= 1 && (
        <footer>
          <Pagination
            total={happyArr.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      )}
    </>
  );
}

export default FoundList;
