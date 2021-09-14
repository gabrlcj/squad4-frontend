import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'

import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react'


export default function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
      setShowModal(prev => !prev);
    };
  
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/' exact>
            <LoginPage showModal={showModal} setShowModal={setShowModal} openModal={openModal} />
          </Route>
        </Switch>
        <ToastContainer theme={'dark'} autoClose={3000} />
      </Router>
    </>
  )
}
