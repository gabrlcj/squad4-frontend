import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route {...rest}>
      {token ?
        <Component />
        :
        <Redirect to="/" />
      }
    </Route>
  );
};

export default PrivateRoute;