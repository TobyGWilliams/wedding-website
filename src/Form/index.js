import React, { useState } from "react";

import Row from "./Row";

export default () => {
  const [formData, setFormData] = useState([{}, {}]);

  return (
    <div class="horizontal-center">
      <form>
        {formData.map((attendee, index) => (
          <Row
            attendee={attendee}
            update={(newAttendee) => {
              const newFormData = formData.map(
                (previousAttendee, previousIndex) =>
                  index === previousIndex ? newAttendee : previousAttendee
              );
              setFormData(newFormData);
            }}
            remove={() => {
              const newFormData = formData
                .map((previousAttendee, previousIndex) =>
                  index === previousIndex ? null : previousAttendee
                )
                .filter((ele) => ele);
              setFormData(newFormData);
            }}
          />
        ))}
        <div className="row align-right">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setFormData([...formData, {}]);
            }}
          >
            Add
          </button>
        </div>
        <div className="row">
          <p className="horizontal-center paragraph-spacer">
            Thank you very much for getting back to us!
          </p>
          <button
            className="horizontal-center"
            type="button"
            onClick={() => {
              console.log(formData);
              setFormData([{}]);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
