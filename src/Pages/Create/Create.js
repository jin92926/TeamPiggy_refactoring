import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { createdObjAtom, loginState } from "../../Atom";
import { Container } from "Styles/globalStyle";
import { CreateContainer } from "../../Components/DetailItem/itemStyle";
import {
  CreateBtn,
  DateWeatherArea,
  TitleContentArea,
  FileArea,
  ImgContainer,
} from "./CreateStyle";

import { addDoc, collection } from "firebase/firestore";
import { dbService, storageService } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function Create() {
  const [title, setTitle] = useState("");
  const [weather, setWeather] = useState("");
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState("");
  const setNewHappy = useSetRecoilState(createdObjAtom);
  const userInfo = useRecoilValue(loginState);

  const navigate = useNavigate();
  const onFileChange = (event) => {
    // 이미지 파일 보여주기 위해
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment(""); // 이미지 삭제

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeWeather = (event) => {
    setWeather(event.target.value);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const submitHandler = async () => {
    let attachmentUrl = "";
    if (attachment !== "") {
      //파일 경로 참조 만들기
      const attachmentRef = ref(storageService, `image/${uuidv4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await getDownloadURL(response.ref);
      console.log(attachmentUrl);
      setAttachment("");
    }

    const submitHappy = {
      제목: title,
      날짜: new Date(),
      날씨: weather,
      내용: text,
      url: attachmentUrl,
    };
    console.log(submitHappy);
    setNewHappy(submitHappy);

    if (submitHappy.제목.length < 2 || submitHappy.내용.length < 2) {
      alert("제목과 내용을 두 글자 이상 입력해주세요");
    } else {
      await addDoc(collection(dbService, userInfo.userName), submitHappy);
      setTitle("");
      setWeather("");
      setText("");

      navigate("/create/now");
    }
  };

  return (
    <div>
      <Container>
        <CreateContainer>
          <form className="form__create">
            {attachment ? <ImgContainer src={attachment} /> : <ImgContainer />}
            <FileArea>
              <input type="file" accept="image/*" onChange={onFileChange} />
              <button onClick={onClearAttachment}>Clear</button>
            </FileArea>
            <DateWeatherArea>
              <span className="dateWeather">
                {new Date().toLocaleDateString().slice(0, -1)}
              </span>
              <input
                className="dateWeather"
                value={weather}
                onChange={onChangeWeather}
                type="text"
                placeholder="날씨는 어때요?"
                maxLength={8}
              ></input>
            </DateWeatherArea>
            <TitleContentArea>
              <input
                value={title}
                onChange={onChangeTitle}
                type="text"
                placeholder="제목"
                required
                maxLength={50}
              />
              <textarea
                value={text}
                onChange={onChangeText}
                placeholder="행복을 입력해주세요"
                required
              />
            </TitleContentArea>
          </form>
          <CreateBtn onClick={submitHandler}>행복 조각 모으기</CreateBtn>
        </CreateContainer>
      </Container>
    </div>
  );
}

export default Create;
