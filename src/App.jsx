import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { QuestionnairePage } from "./components/Questionnaire";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./privateRoutes/Private";
import { useState } from "react";
import { LoadingComponent} from "./components/LoadingComponent";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <PrivateRoute path='/firstaccess'>
            <QuestionnairePage />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/:id'>
            <Dashboard showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} />
          </PrivateRoute>
          <Route path="/" exact>
            <LoginPage showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} />
          </Route>
          <Route path="/loading" exact>
            <LoadingComponent />
          </Route>
        </Switch>
        <ToastContainer theme={"dark"} autoClose={3000} />
      </Router>
    </>
  );
}