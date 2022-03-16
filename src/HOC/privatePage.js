import React from "react";
import { Redirect, Route } from "react-router-dom";
import { KEY_TOKEN } from "app/const/App";

export const PrivatePage = ({ Component, ...restProps }) => {
  // const isLogined = localStorage.getItem(KEY_TOKEN);

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
              <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
