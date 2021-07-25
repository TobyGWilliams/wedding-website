import React from "react";

import Title from "./Title";
import SectionHeading from "./SectionHeading";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="border border-container"></div>
      <div className="background-image"></div>
      <div className="column border-container">
        <div className="scrollable">
          <Title />
          <SectionHeading name="Photos" id="photos">
            <p className="horizontal-center paragraph-spacer">
              We've created a dropbox folder, if you have any photos (any at
              all) from the day, we'd love to see them. <br />
              <br /> Please upload them here:
              <br />
              <br />
              <a href="https://www.dropbox.com/request/tuRwTBVuGVU09J7tgTSU">
                https://www.dropbox.com/request/tuRwTBVuGVU09J7tgTSU
              </a>
            </p>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
}

export default App;
