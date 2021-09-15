import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {

  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={
        () => (
          token
            ? (
              <Component />
            ) : (
              <Redirect
                to={{
                  pathname: '/login'
                }}
              />
            ))
      }
    />
  );
}

export default PrivateRoute;