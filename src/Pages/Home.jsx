import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useBeerContext } from "../Context/Context";

const Home = () => {
  const { state } = useBeerContext();

  return (
    <div className="grid">
      {state.beers.length
        ? state.beers.map((beer) => <Card data={beer} key={beer.id} />)
        : null}
    </div>
  );
};

export default Home;
