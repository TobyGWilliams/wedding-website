import React from "react";

import Title from "./Title";
import Form from "./Form";
import SectionHeading from "./SectionHeading";
import Heading from "./Heading";

import "./App.css";

function App() {
  return (
    <div class="container">
      <div className="border border-container"></div>
      <div className="background-image"></div>
      <div className="column border-container">
        <Heading />
        <div className="scrollable">
          <Title />
          <SectionHeading name="Where" id="where">
            <p class="horizontal-center paragraph-spacer">
              Our weding will take place on the 23rd July 2021 at Stanlake Park
            </p>
          </SectionHeading>
          <SectionHeading name="RSVP" id="rsvp">
            <p class="horizontal-center paragraph-spacer">
              Please let us know if you will be able to make our 'big day' and
              if there is anything we need to know.
            </p>
            <Form></Form>
          </SectionHeading>
          <SectionHeading name="Places To Stay" id="hotels">
            <p class="horizontal-center paragraph-spacer">
              If you would like to stay over for the big day, then we suggest
              boking early as a lot of weddings are being squeezed into 2021!
            </p>
          </SectionHeading>
          <SectionHeading name="Gift List" id="giftList" />
        </div>
      </div>
    </div>
  );
}

export default App;
