import { createContext, useContext, useState, useEffect } from "react";

const BeerContext = createContext();

const lsCart = JSON.parse(localStorage.getItem("cart")) || [];

const Context = ({ children }) => {
  const [cart, setCart] = useState(lsCart);
  // Crear un useReducer con el que se maneje el cart, llamado a API, cambio de claro a oscuro
  console.log(cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BeerContext.Provider value={{ cart, setCart }}>
      {children}
    </BeerContext.Provider>
  );
};
export default Context;

export const useBeerContext = () => useContext(BeerContext);
