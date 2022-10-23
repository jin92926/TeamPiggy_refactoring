import styled from "styled-components";
import { Button } from "Styles/globalStyle";
import theme from "Styles/theme";

export const CreateBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 5%;
  max-height: 61px;
  background: ${theme.violet};
  color: ${theme.blue};
  border-radius: 10px;
  font-size: 25px;
  font-weight: 500;
  margin-top: 40px;
  z-index: 1000;
  :hover {
    background: ${theme.white};
    color: ${theme.blue};
  }
  @media ${({ theme }) => theme.desktop} {
    max-width: 1140px;
    width: 90vw;
    padding: 3%;
  }
`;

export const DateWeatherArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > span {
    color: #ffff;
    padding-top: 8px;
  }
  > input {
    content: attr(placeholder);
    border-color: #ffff;
    border: none;
    &::placeholder {
      color: #ffff;
    }
  }
  .dateWeather {
    background-color: ${theme.detailTitle};
    width: 47%;
    height: 35px;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const FileArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 220px;
`;

export const TitleContentArea = styled.div`
  width: 100%;
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    margin-bottom: 2px;
    padding: 5px;
    @media ${({ theme }) => theme.desktop} {
      font-size: 15px;
      height: 35px;
    }
  }
  textArea {
    width: 100%;
    height: 170px;
    padding: 5px;
    @media ${({ theme }) => theme.desktop} {
      font-size: 15px;
    }
  }
`;
