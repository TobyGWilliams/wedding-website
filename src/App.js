import React from "react";

import Title from "./Title";
import Form from "./Form";
import SectionHeading from "./SectionHeading";
import Heading from "./Heading";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="border border-container"></div>
      <div className="background-image"></div>
      <div className="column border-container">
        <Heading />
        <div className="scrollable">
          <Title />
          <SectionHeading name="Where" id="where">
            <p className="horizontal-center paragraph-spacer">
              Our weding will take place on the 23rd July 2021 at{" "}
              <a
                href="https://g.page/stanlake-park-vineyard-weddings?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stanlake Park
              </a>{" "}
              in Twyford, Berkshire, RG10 0BN.
            </p>
            <iframe
              title="Map to Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6135.652108649984!2d-0.8504099722238062!3d51.47050378372535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876871437edeb9f%3A0x3b221de71ac605f0!2sStanlake%20Park%20Vineyard%20and%20Barn%20Weddings!5e1!3m2!1sen!2suk!4v1614537413432!5m2!1sen!2suk"
              width="400"
              height="300"
              style={{ border: 0, margin: "0 auto" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </SectionHeading>
          <SectionHeading name="Travel" id="travel">
            <p className="horizontal-center paragraph-spacer">
              The venue is a short 3 minute ride from Twyford Rail Station. The
              route from the station to the venue is theoretically walkable as
              the roads do have footpaths, however, 20 minutes walk, all dressed
              up, in the middle of July might be a little sticky.
            </p>
            <p className="horizontal-center paragraph-spacer">
              Reading town center is 7.5 miles (20 minutes by car) away and may
              provide easier travel/accomodation options.
            </p>
            <p className="horizontal-center paragraph-spacer">
              There is spacing for parking onsite, however all vehicles must be
              collected by 9.00 am the next morning.
            </p>
            <p className="horizontal-center paragraph-spacer">
              Further travel information from the venue can be found here:
              <br />
              <a
                href="https://stanlakeparkweddings.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://stanlakeparkweddings.com/contact/
              </a>
            </p>
          </SectionHeading>
          <SectionHeading name="RSVP" id="rsvp">
            <p className="horizontal-center paragraph-spacer">
              Please let us know if you will be able to join us and if there is
              anything we need to know.
              <br />
              <br />
              <i>
                Please add additional entries for each party member, including
                children
              </i>
            </p>
            <Form />
          </SectionHeading>

          <SectionHeading name="Places To Stay" id="hotels">
            <p className="horizontal-center paragraph-spacer">
              If you would like to stay over for the big day, then we suggest
              boking early as a lot of weddings are being squeezed into 2021!
            </p>
            <p className="horizontal-center paragraph-spacer">
              Information from Stanlake Park on places to stay can be found
              here:
              <br />
              <a
                href="https://stanlakeparkweddings.com/where-to-stay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://stanlakeparkweddings.com/where-to-stay/
              </a>
            </p>
            <p className="horizontal-center paragraph-spacer">
              We have a group reservation with{" "}
              <a href="https://all.accor.com/hotel/5432/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps">
                Novotel Reading.
              </a>
              <br />
              The prices for the group reservation are:
              <br />
              <br />
              single @ 2 nights - £110
              <br />
              double @ 2 nights - £120
              <br />
              triple @ 2 nights - £140
              <br />
              single @ 1 night - £70
              <br />
              double @ 1 night - £75
              <br />
              triple @ 1 night - £80
              <br />
              <br />
              To book at these prices, please email H5432-SB@accor.com or call
              0118 952 2600 quoting "Erynn and Toby’s Wedding”
            </p>
          </SectionHeading>
          <SectionHeading name="Gift List" id="giftList">
            <p className="horizontal-center paragraph-spacer">
              In the unlikely event that we will be able to go on our honeymoon,
              we will have an option through our travel agent to add an
              experience to our vacation.
            </p>
            <p className="horizontal-center paragraph-spacer">
              We have also have a option with Prezola for plates, plants and
              pepper grinders:
              <br />
              <a
                href="https://prezola.com/wishlists/10228081/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pressola
              </a>{" "}
            </p>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
}

export default App;
