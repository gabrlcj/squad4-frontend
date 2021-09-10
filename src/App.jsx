import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'
import { QuestionnairePage } from './components/Questionnaire'

import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Dashboard } from './components/Dashboard'

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Switch>
            <Route path='/firstaccess'>
              <QuestionnairePage />
            </Route>
          </Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/' exact>
            <LoginPage />
          </Route>
        </Switch>
        <ToastContainer theme={'dark'} autoClose={3000} />
      </Router>
    </>
  )
}
