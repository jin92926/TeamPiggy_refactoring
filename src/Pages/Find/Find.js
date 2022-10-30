import React from "react";
import { CreateContainer } from "../../Components/DetailItem/itemStyle";
import { Container } from "Styles/globalStyle";
import FoundList from "./FoundList";

function Find() {
  return (
    <Container>
      <CreateContainer>
        <form className="form__find">
          <FoundList></FoundList>
        </form>
      </CreateContainer>
    </Container>
  );
}

export default Find;
