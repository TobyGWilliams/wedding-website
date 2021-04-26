import React from "react";

import "./index.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ name, id, children }) => (
  <div className="section-heading-wrapper">
    <h2 id={id} className="section-heading">
      {name}
    </h2>
    {children}
  </div>
);
