import { React, useState } from "react";
import { Container } from "Styles/globalStyle";
import { loginState } from "Atom";
import { useRecoilValue } from "recoil";
import {
  CreateContainer,
  DateWeatherArea,
  Title,
  Img,
  Content,
  Delete,
  DeleteBtn,
} from "../DetailItem/itemStyle";
import { doc, deleteDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useNavigate } from "react-router-dom";

function DetailItem({ title, date, weather, url, content, type, id }) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(loginState);

  const deleteList = async (id) => {
    const listDoc = doc(dbService, userInfo.userName, id);
    await deleteDoc(listDoc);
  };

  return (
    <Container>
      <CreateContainer>
        <form className="form__detail">
          <Title>{title}</Title>
          <DateWeatherArea>
            {type === "create" ? (
              <span>{date.toLocaleString().slice(0, 12)}</span>
            ) : (
              <span>{date.toDate().toLocaleString().slice(0, 12)}</span>
            )}

            <span>{weather}</span>
          </DateWeatherArea>
          {url && <Img src={url} />}
          <Content isImg={url}>{content}</Content>

          {type === "create" ? null : (
            <Delete>
              <img src="/trash.png" alt="삭제하기" />
              <DeleteBtn
                onClick={() => {
                  deleteList(id);
                  navigate("/find");
                }}
              >
                삭제하기
              </DeleteBtn>
            </Delete>
          )}
        </form>
      </CreateContainer>
    </Container>
  );
}

export default DetailItem;
