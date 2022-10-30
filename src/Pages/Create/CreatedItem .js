import DetailItem from "Components/DetailItem/DetailItem";
import { React, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { createdObjAtom } from "../../Atom";

function CreatedItem() {
  let createdObj = useRecoilValue(createdObjAtom);
  console.log(createdObj.날짜);

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
