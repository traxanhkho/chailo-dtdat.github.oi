import { KEY_TOKEN } from "app/const/App";
import {
  LOGIN_FAILED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/userConstants";

const initialState = {
  logging: false,
  isLogined: false,
  currentUser: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTING: {
      state.logging = true;

      return { ...state };
    }

    case LOGIN_SUCCESS: {
      state.logging = false;
      state.isLogined = true;
      state.currentUser = action.payload;

      localStorage.setItem(KEY_TOKEN, "fake_login");

      return { ...state };
    }

    case LOGIN_FAILED: {
      state.logging = false;

      return { ...state };
    }

    case LOGOUT: {
      state.logging = false;
      state.isLogined = false;
      state.currentUser = null;

      localStorage.removeItem(KEY_TOKEN);
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
