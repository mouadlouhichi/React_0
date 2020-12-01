import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import useReducer from "./user/user.reducer";

export default combineReducers({
  user: useReducer,
  cart: cartReducer,
});
