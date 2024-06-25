export const reducer = (state, action) => {
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
