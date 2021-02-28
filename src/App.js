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
              Our weding will take place on the 23rd July 2021 at{" "}
              <a
                href="https://g.page/stanlake-park-vineyard-weddings?share"
                target="_blank"
              >
                Stanlake Park
              </a>{" "}
              in Twyford, Berkshire, RG10 0BN.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6135.652108649984!2d-0.8504099722238062!3d51.47050378372535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876871437edeb9f%3A0x3b221de71ac605f0!2sStanlake%20Park%20Vineyard%20and%20Barn%20Weddings!5e1!3m2!1sen!2suk!4v1614537413432!5m2!1sen!2suk"
              width="400"
              height="300"
              style={{ border: 0, margin: "0 auto" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </SectionHeading>
          <SectionHeading name="RSVP" id="rsvp">
            <p class="horizontal-center paragraph-spacer">
              Please let us know if you will be able to join us and if there is
              anything we need to know.
            </p>
            <Form></Form>
          </SectionHeading>
          <SectionHeading name="Travel" id="travel">
            <p class="horizontal-center paragraph-spacer">
              The venue is a short 3 minute ride from Twyford Rail Station. The
              route from the station to the venue is theoretically walkable as
              the roads do have footpaths, however, 20 minutes walk, all dressed up, in the middle of July might be a little sticky.
            </p>
            <p class="horizontal-center paragraph-spacer">
              Reading town center is 7.5 miles (20 minutes by car) away and may provide easier travel/accomodation options.
            </p>
            <p class="horizontal-center paragraph-spacer">
              There is spacing for parking onsite, however all vehicles must be
              collected by 9.00 am the next morning.
            </p>
            <p class="horizontal-center paragraph-spacer">
              Further travel information from the venue can be found here:{" "}
              <a
                href="https://stanlakeparkweddings.com/contact/"
                target="_blank"
              >
                https://stanlakeparkweddings.com/contact/
              </a>
            </p>
          </SectionHeading>
          <SectionHeading name="Places To Stay" id="hotels">
            <p class="horizontal-center paragraph-spacer">
              If you would like to stay over for the big day, then we suggest
              boking early as a lot of weddings are being squeezed into 2021!
            </p>
            <p class="horizontal-center paragraph-spacer">
              Information from Stanlake Park on places to stay can be found
              here:{" "}
              <a
                href="https://stanlakeparkweddings.com/where-to-stay/"
                target="_blank"
              >
                https://stanlakeparkweddings.com/where-to-stay/
              </a>
            </p>
          </SectionHeading>
          <SectionHeading name="Gift List" id="giftList">
            <p class="horizontal-center paragraph-spacer">
              In the unlikely event that we will be able to go on our honeymoon,
              we will have an option through our travel agent to add an
              experience to our vacation.
            </p>
            <p class="horizontal-center paragraph-spacer">
              We have also have a option with{" "}
              <a href="https://prezola.com/wishlists/10228081/" target="_blank">
                Pressola
              </a>{" "}
              for plates, plants and pepper grinders.
            </p>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
}

export default App;
