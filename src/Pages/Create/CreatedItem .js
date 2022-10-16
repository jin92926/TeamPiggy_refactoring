import DetailItem from "Components/DetailItem/DetailItem";
import React from "react";
import { useRecoilValue } from "recoil";
import { createdObjAtom } from "../../Atom";

function CreatedItem() {
  const createdObj = useRecoilValue(createdObjAtom);
  return (
    <DetailItem
      title={createdObj.제목}
      date={createdObj.날짜}
      weather={createdObj.날씨}
      url={createdObj.url}
      content={createdObj.내용}
      type={"create"}
    />
  );
}

export default CreatedItem;
