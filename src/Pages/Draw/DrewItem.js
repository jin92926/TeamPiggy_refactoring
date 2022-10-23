import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { dbService } from "../../firebase";

import Card from "./Card";
import DetailItem from "Components/DetailItem/DetailItem";
import { useRecoilValue } from "recoil";
import { createdObjAtom } from "../../Atom";
import { DivContainer1 } from "./DrawStyle";
import { useNavigate } from "react-router";

function DrewItem() {
  const [isOpen, setIsOpen] = useState(false);
  const createdObj = useRecoilValue(createdObjAtom);
  const navigate = useNavigate();

  const openModalHandler = (e) => {
    e.stopPropagation();
    navigate(`/draw/${createdObj.제목}`);
    setIsOpen(!isOpen);
  };

  console.log(createdObj.제목);

  // { title, date, weather, url, content, type, id }
  return (
    <>
      <DivContainer1>
        <div className="div3">
          {isOpen === false ? (
            <Card openModalHandler={openModalHandler} title={createdObj.제목} />
          ) : (
            <DetailItem
              title={createdObj.제목}
              date={createdObj.날짜}
              weather={createdObj.날씨}
              url={createdObj.url}
              content={createdObj.내용}
              type="draw"
            />
          )}
        </div>
      </DivContainer1>
    </>
  );
}

export default DrewItem;
