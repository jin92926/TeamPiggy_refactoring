import styled from "styled-components";
import theme from "../../Styles/theme";

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  @media ${({ theme }) => theme.desktop} {
    padding: 30px;
  }
  .form__create {
    padding: 30px;
    height: 60vh;
  }
  .form__find {
    padding: 30px 30px 20px 30px;
    height: 680px;
  }
  .form__detail {
    padding: 30px;
    height: 680px;
  }
  .form__create,
  .form__find,
  .form__detail {
    width: 90%;
    background: ${theme.modalBackground};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    @media ${({ theme }) => theme.desktop} {
      width: 90vw;
      max-width: 1140px;
      margin-top: 70px;
      //       margin: 70px 30px 0px 30px;
    }
  }
`;

export const DateWeatherArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > span {
    text-align: center;
    color: #ffff;
    width: 47%;
    height: 27px;
    background: ${theme.dateWeather};
    border-radius: 20px;
    padding-top: 6px;
    font-size: 15px;
    font-weight: 500;
    @media ${({ theme }) => theme.desktop} {
      height: 35px;
      padding-top: 9px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 61px;
  background: ${theme.detailTitle};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  @media ${({ theme }) => theme.desktop} {
    height: 70px;
    font-size: 25px;
  }
`;

export const Img = styled.img`
  object-fit: scale-down;
  height: 230px;
  border: none;
  width: 285px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.isImg ? "210px" : "65%")};
  background: #ffff;
  border-radius: 10px;
  color: black;
  @media ${({ theme }) => theme.desktop} {
    font-size: 20px;
  }
`;

export const Delete = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 17px;
    margin-right: 5px;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
  }
`;

export const DeleteBtn = styled.span`
  background-color: transparent;
  border: 0;
  outline: 0;
  color: white;
  cursor: pointer;
`;
