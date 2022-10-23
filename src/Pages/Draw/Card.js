import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import {
  Container,
  StyledSlider,
  ImageContainer,
  Image,
  Wrap,
} from "./DrawStyle";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useRecoilValue } from "recoil";
import { loginState } from "Atom";

const items = [
  { id: 1, url: "/wedding-invitation.png" },
  { id: 2, url: "/wedding-invitation.png" },
  { id: 3, url: "/wedding-invitation.png" },
  { id: 4, url: "/wedding-invitation.png" },
  { id: 5, url: "/wedding-invitation.png" },
  { id: 6, url: "/wedding-invitation.png" },
];

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useRecoilValue(loginState);
  let navigate = useNavigate();
  const [happyArr, setHappyArr] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, userInfo.userName),
      orderBy("날짜", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHappyArr(arr);
    });
  }, []);

  const randomHappy = happyArr[Math.floor(Math.random() * happyArr.length)];

  const clickNavigate = () => {
    setIsOpen(true);
    navigate(`/draw/${randomHappy.id}`);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 900, //화면 사이즈 900 이하
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500, //화면 사이즈 500 이하
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {items.map((item, index) => {
          return (
            <Wrap key="index">
              <ImageContainer>
                <Image src={item.url} onClick={() => clickNavigate()} />
              </ImageContainer>
            </Wrap>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

export default Card;
