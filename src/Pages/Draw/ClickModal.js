import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { dbService } from "../../firebase";

import Card from "./Card";
import styled from "styled-components";
import DetailItem from "Components/DetailItem/DetailItem";
import DrewItem from "./DrewItem";

const ClickModal = () => {
  const [close, setClose] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };

  const clickEvent = (e) => {
    e.stopPropagation();
    setClose(false);
  };
  const deleteList = async (id) => {
    const listDoc = doc(dbService, "happy", id);
    await deleteDoc(listDoc);
  };

  return (
    <>
      <Background>
        {close === true ? (
          <DivContainer>
            <div className="div2">
              <img
                src={process.env.PUBLIC_URL + "/piggybank.png"}
                onClick={clickEvent}
                alt="title"
              />
              <p>저금통을 눌러주세요</p>
            </div>
          </DivContainer>
        ) : (
          <DrewItem />
        )}
      </Background>
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fcf6f5;
`;

const DivContainer = styled.div`
  width: 414px;
  height: 736px;
  background: linear-gradient(17.56deg, #f6e7fb 0%, #3b6bb7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > .div2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    animation: blink-effect 2s linear 1;

    > img {
      width: 219.65px;
      height: 198.59px;
      padding-bottom: 20px;
    }

    @keyframes blink-effect {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const DivContainer1 = styled(DivContainer)`
  justify-content: space-between;

  > .div3 {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;

export default ClickModal;
