import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ children, ...rest }) {

  const { token } = useContext(AuthContext);

    return (
      <Route {...rest} render={() => {
        return token
          ? children
          : <Redirect to='/' />
      }} />
    )
 }
 

export default PrivateRoute;