import styled from "styled-components";

/* ~~~ Create public style ~~~ */
export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(180.45deg, #f6e7fb 1.69%, #3b6bb7 99.25%);
  .form__create {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 40px 27px;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 10px;
    padding: 30px;
    height: 45vh;
  }
  .form__find {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 40px 27px;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 10px;
    padding: 20px 30px;
    width: 305px;
  }
`;

export const DateWeatherArea = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    text-align: center;
    color: #ffff;
    width: 140px;
    height: 21px;
    background-color: rgba(101, 146, 236, 0.6);
    border-radius: 20px;
    padding-top: 5px;
    font-size: 14px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299px;
  height: 61px;
  background-color: #6592ec66;
  border-radius: 10px;
  color: white;
`;

export const Img = styled.img`
  object-fit: scale-down;
  width: 299px;
  height: 137px;
  border: none;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: ${(props) => (props.isImg ? "128px" : "65%")};

  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  color: black;
`;

export const Delete = styled.div`
  width: 299px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 13.33px;
  }
`;

export const DeleteBtn = styled.span`
  background-color: transparent;
  border: 0;
  outline: 0;
  color: white;
`;

//

const Container = styled.section`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  width: 359px;
  height: 451px;
  background: #ffffff4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const DivContainer = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const WeatherDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 299px;
  height: 22px;
  > span {
    background: rgba(101, 146, 236, 0.43);
    border-radius: 20px;
    width: 132px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
