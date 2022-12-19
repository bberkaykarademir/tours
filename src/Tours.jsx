import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <h1>Our Tours</h1>
      {tours.map((tour, index) => {
        return <Tour removeTour={removeTour} key={index} {...tour} />;
      })}
    </div>
  );
};

export default Tours;
