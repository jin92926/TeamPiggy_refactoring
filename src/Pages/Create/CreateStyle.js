import styled from "styled-components";
import { Button } from "Styles/globalStyle";

export const CreateBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5%;
  max-width: 340px;
  max-height: 61px;
  background: rgba(246, 231, 251, 0.65);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const DateWeaterArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > span {
    text-align: center;
    color: #ffff;
    width: 143px;
    height: 21px;
    background-color: rgba(101, 146, 236, 0.6);
    border-radius: 20px;
    padding-top: 5px;
    font-size: 14px;
  }
  > input {
    content: attr(placeholder);
    background-color: rgba(101, 146, 236, 0.6);
    border-radius: 20px;
    border-color: #ffff;
    width: 143px;
    height: 22px;
    border: none;
    text-align: center;
    padding-top: 3px;
    &::placeholder {
      color: #ffff;
    }
  }
`;

export const FileArea = styled.div``;

export const ImgContainer = styled.img`
  object-fit: scale-down;
  width: 299px;
  height: 220px;
  border: 1px solid #fcf6f5;
`;

export const TitleContentArea = styled.div`
  width: 100%;
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97.2%;
    height: 20px;
    margin-bottom: 2px;
  }
  textArea {
    width: 98%;
    height: 100px;
  }
`;
