import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../utils/reducer";
import Swal from "sweetalert2";

const BeerContext = createContext();

const lsCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  beers: [],
  cart: lsCart,
  theme: "", //Puede inicializarse con un string o con un booleano
  beer: {},
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const url = "https://api.sampleapis.com/beers/ale/";
  // const url = "https://api.punkapi.com/v2/beers";
  const getBeers = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_BEERS", payload: data });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al traer la lista de cervezas!",
        // footer: err,
      });
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <BeerContext.Provider value={{ state, dispatch }}>
      {children}
    </BeerContext.Provider>
  );
};
export default Context;

export const useBeerContext = () => useContext(BeerContext);
