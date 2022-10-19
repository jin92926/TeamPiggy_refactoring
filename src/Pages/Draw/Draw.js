// 랜덤 뽑기 메인 컴포넌트
// 행복한 기억이 필요하세요?
// 여기서 누르면 모달(HappyModal) 창이 나와야함
import { useEffect, useState } from "react";
import ClickModal from "./ClickModal";

function Draw() {
  const [showmodal, setShowmodal] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowmodal(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ClickModal />;
}

export default Draw;
