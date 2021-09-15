import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'

import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react'


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
          <Route path='/firstaccess'>
            <QuestionnairePage />
          </Route>
          <Route path='/dashboard/:id'>
            <Dashboard />
          </Route>
          <Route path='/register'>
            <RegisterPage showModal={showModal} setShowModal={setShowModal} handleModal={handleModal}  />
          </Route>
          <Route path='/' exact>
            <LoginPage showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} />
          </Route>
        </Switch>
        <ToastContainer theme={'dark'} autoClose={3000} />
      </Router>
    </>
  )
}
