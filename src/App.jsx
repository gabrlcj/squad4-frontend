import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { QuestionnairePage } from "./components/Questionnaire";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./privateRoutes/Private";

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <PrivateRoute path='/firstaccess' component={QuestionnairePage} />
          <PrivateRoute path='/dashboard/:id' component={Dashboard} />
          <Route path='/register' component={RegisterPage} />            
          <Route path="/" exact  component={LoginPage} />
        </Switch>
        <ToastContainer theme={"dark"} autoClose={3000} />
      </Router>
    </>
  );
}
