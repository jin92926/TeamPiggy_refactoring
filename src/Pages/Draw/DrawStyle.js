import styled from "styled-components";
import Slider from "react-slick";

// card
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 20px;
  }
  .slick-next {
    right: 20px;
  }
  .slick-slide div {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 10px;
`;

export const Image = styled.img`
  max-width: 90%;
  max-height: 100%;
  cursor: pointer;
`;

export const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
`;

export const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
      z-index: 1000;
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

export const DivContainer1 = styled(DivContainer)`
  justify-content: space-between;

  > .div3 {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;
