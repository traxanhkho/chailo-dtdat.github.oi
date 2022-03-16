import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUESTING,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  error: "",
  list: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUESTING: {
      state.loading = true;

      return { ...state };
    }

    case ADD_PRODUCT_SUCCESS: {
      state.loading = false;
      return { ...state, list: [...state.list, action.payload] };
    }

    case ADD_PRODUCT_FAILED: {
      state.loading = false;
      state.error = action.payload;

      return { ...state };
    }

    case DELETE_PRODUCT_SUCCESS: {
      let result = [...state.list];
      const index = result.findIndex((y) => y.id === action.payload);

      if (index !== -1) {
        result.splice(index, 1);
      }

      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
