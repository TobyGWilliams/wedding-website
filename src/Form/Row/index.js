import React from "react";

import "./index.css";

export default ({ attendee = {}, update = () => {}, remove = () => {} }) => {
  const {
    firstName = "",
    secondName = "",
    dietry = "",
    availability = "",
  } = attendee;

  return (
    <div className="row">
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(event) => {
          event.preventDefault();
          update({ ...attendee, firstName: event.target.value });
        }}
      ></input>
      <input
        placeholder="Second Name"
        value={secondName}
        onChange={(event) => {
          event.preventDefault();
          update({ ...attendee, secondName: event.target.value });
        }}
      ></input>
      <input
        placeholder="Dietry Requirements"
        value={dietry}
        onChange={(event) => {
          event.preventDefault();
          update({ ...attendee, dietry: event.target.value });
        }}
      ></input>
      <select
        name="availability"
        id="availability"
        value={availability}
        onChange={(event) => {
          event.preventDefault();
          update({ ...attendee, availability: event.target.value });
        }}
      >
        <option value="day">Looking forwards to it!</option>
        <option value="evening">We'll come for a dance</option>
        <option value="no">Sorry, catch ya later</option>
      </select>
      <button type="button" onClick={remove}>
        Remove
      </button>
    </div>
  );
};
