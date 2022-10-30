import { DivContainer } from "./DrawStyle";

const ClickModal = ({ clickEvent }) => {
  return (
    <DivContainer>
      <div className="div2">
        <img
          src={process.env.PUBLIC_URL + "/mainpig.png"}
          onClick={clickEvent}
          alt="title"
        />
        <p>저금통을 눌러주세요</p>
      </div>
    </DivContainer>
  );
};

export default ClickModal;
