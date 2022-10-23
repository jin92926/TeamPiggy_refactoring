import { useState } from "react";
import ClickModal from "./ClickModal";
import Card from "./Card";

function Draw() {
  const [close, setClose] = useState(true);

  const clickEvent = (e) => {
    e.stopPropagation();
    setClose(false);
  };

  return (
    <>{close === true ? <ClickModal clickEvent={clickEvent} /> : <Card />}</>
  );
}

export default Draw;
