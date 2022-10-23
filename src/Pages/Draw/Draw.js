import { useState } from "react";
import ClickModal from "./ClickModal";
import DrewItem from "./DrewItem";

function Draw() {
  const [close, setClose] = useState(true);

  const clickEvent = (e) => {
    e.stopPropagation();
    setClose(false);
  };

  return (
    <>
      {close === true ? <ClickModal clickEvent={clickEvent} /> : <DrewItem />}
    </>
  );
}

export default Draw;
