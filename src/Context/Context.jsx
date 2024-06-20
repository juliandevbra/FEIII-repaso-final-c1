import { createContext, useContext, useEffect, useReducer } from "react";

const BeerContext = createContext();

const lsCart = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_BEERS": //Esto es obligatorio
      return { ...state, beers: action.payload };
    case "GET_BEER": //Esto es extra
      return {};
    case "ADD_CART": //Esto es obligatorio
      return { ...state, cart: [...state.cart, action.payload] };
    case "TOGGLE_THEME": //Esto es obligatorio
      return { ...state, theme: "" };
    case "DELETE_CART": //Esto es extra
      const filterCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filterCart };
    default:
      throw new Error("No se pudo modificar el estado.");
  }
};

const initialState = {
  beers: [],
  cart: lsCart,
  theme: "", //Puede inicializarse con un string o con un booleano
  beer: {},
};

const Context = ({ children }) => {
  // const [beers, setBeers] = useState([]);
  // const [cart, setCart] = useState(lsCart);
  // Crear un useReducer con el que se maneje el cart, llamado a API, cambio de claro a oscuro
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const getBeers = async () => {
    const res = await fetch("https://api.sampleapis.com/beers/ale/");
    const data = await res.json();
    dispatch({ type: "GET_BEERS", payload: data });
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
