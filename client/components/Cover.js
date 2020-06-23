import React from "react";

export default function Cover() {
  return (
    <div className="cover">
      <div>
        <h1>RJM Shipments Inc.</h1>
      </div>
      <div>
        <h1>{dateNow()}</h1>
      </div>
    </div>
  );
}

const dateNow = () => {
  let date = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
