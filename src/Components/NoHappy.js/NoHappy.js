import { useNavigate } from "react-router-dom";
import {
  NoHappyContainer,
  NoHappyExplain,
  GotoCreateButton,
} from "./NoHappyStyle";

const NoHappy = () => {
  let navigate = useNavigate();

  return (
    <NoHappyContainer>
      <NoHappyExplain>
        <span>
          <span className="p1">아직 행복이 없어요!</span>
          <span className="p2">행복을 모아주세요</span>
        </span>
        <GotoCreateButton onClick={() => navigate("/create")}>
          행복 모으러 가기
        </GotoCreateButton>
      </NoHappyExplain>
    </NoHappyContainer>
  );
};

export default NoHappy;
