import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const getFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    setTours(data);
    console.log(data);
  };
  useEffect(() => {
    getFetch();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (tours.length == 0) {
    return (
      <div className="notour">
        <h1>there is no tour</h1>
        <button className="interest" onClick={getFetch}>refresh</button>
      </div>
    );
  }
  return <Tours tours={tours} removeTour={removeTour} />;
};

export default App;
