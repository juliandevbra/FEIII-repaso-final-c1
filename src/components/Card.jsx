import React from "react";
import { Link } from "react-router-dom";
import { useBeerContext } from "../Context/Context";

const Card = ({ data }) => {
  const { state, dispatch } = useBeerContext();
  const findCart = state.cart.find((item) => data.id === item.id);
  // console.log(findCart);

  const addCart = () => {
    if (findCart) {
      dispatch({ type: "DELETE_CART", payload: data });
    } else {
      dispatch({ type: "ADD_CART", payload: data });
    }
  };

  return (
    <div className="card">
      <Link to={"/beer/" + data.id}>
        <img src={data.image} alt="beer-detail" />
        <h3>{data.name}</h3>
      </Link>
      <p>{data.price}</p>

      <button onClick={addCart}>{findCart ? "❌" : "🛒"}</button>
    </div>
  );
};

export default Card;
