import React, { forwardRef } from "react";

import { useForm, useFieldArray } from "react-hook-form";

import Tick from "./tick";

import "./index.css";

const REQUIRED = {
  required: true,
};

const Input = forwardRef(({ placeholder, error, ...rest }, ref) => (
  <div>
    <input placeholder={placeholder} ref={ref} {...rest} />
    {error && (
      <p className="error-message">
        Please fill out your {placeholder.toLowerCase()}
      </p>
    )}
  </div>
));

const Form = () => {
  const defaultValues = {
    attendees: [{}],
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => await fetch( 'https://api.erynnandtobygettingmarried.co.uk/wedding-reservations',  {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "attendees",
  });

  if (isSubmitSuccessful)
    return (
      <div className="horizontal-center">
        <Tick />
        <p className="paragraph-spacer">Thank you for your RSVP!</p>
      </div>
    );

  return (
    <div class="horizontal-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          const error = errors?.attendees?.[index];
          return (
            <div key={field.id}>
              <div className="row">
                <Input
                  placeholder="First Name"
                  error={error?.firstName}
                  {...register(`attendees.${index}.firstName`, REQUIRED)}
                />
                <Input
                  placeholder="Second Name"
                  error={error?.secondName}
                  {...register(`attendees.${index}.secondName`, REQUIRED)}
                />
                <Input
                  placeholder="Dietry Requirements"
                  error={error?.dietryRequirements}
                  {...register(
                    `attendees.${index}.dietryRequirements`,
                    REQUIRED
                  )}
                />
                <select
                  name="availability"
                  id="availability"
                  placeholder="please select"
                  {...register(`attendees.${index}.availability`, REQUIRED)}
                >
                  <option value="day">Looking forwards to it!</option>
                  <option value="evening">We'll come for a dance</option>
                  <option value="no">Sorry, catch ya later</option>
                </select>
                {error?.availability && (
                  <p className="error-message">
                    Please select your availability
                  </p>
                )}
              </div>
              <div className="row align-right">
                <button type="button" onClick={remove}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <div className="row align-right">
          <button type="button" onClick={append}>
            Add
          </button>
        </div>
        <div className="row">
          <p className="horizontal-center paragraph-spacer">
            Thank you very much for getting back to us!
          </p>
          <button className="horizontal-center" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
