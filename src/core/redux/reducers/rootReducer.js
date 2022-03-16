import { combineReducers } from "redux";

// Import Redcucers
import { UserReducer } from "./userReducer";
import { ProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  product: ProductReducer,
});
