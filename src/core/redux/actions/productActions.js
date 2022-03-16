import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUESTING,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

import { create } from "app/const/firebase";

export const addProductAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_REQUESTING,
    });

    create("product", data)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: data,
        });

        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_FAILED,
          payload: error,
        });
      });
  };
};

export const deleteAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: id,
    });
  };
};
