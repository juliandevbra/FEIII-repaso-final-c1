import React from "react";
import { useBeerContext } from "../Context/Context";
import Card from "../components/Card";

const Cart = () => {
  const { state } = useBeerContext();
  return (
    <div className="grid">
      {state.cart.map((beer) => (
        <Card data={beer} key={beer.id} />
      ))}
    </div>
  );
};

export default Cart;
