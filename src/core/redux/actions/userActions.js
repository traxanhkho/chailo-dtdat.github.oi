import {
  LOGIN_FAILED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/userConstants";

export const loginAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUESTING,
      });

      // If Login success
      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            id: 1,
            username: "demo user name",
          },
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error,
      });
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
