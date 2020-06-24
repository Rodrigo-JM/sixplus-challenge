import React from "react";

//I always like to showcase a little bit of my artistic side on my projects by creating custom covers whenever it's fit
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

//This is to generate the current date and display it on the cover
//I thought it was a good idea since this is supposed to be a shipment company
const dateNow = () => {
  let date = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
