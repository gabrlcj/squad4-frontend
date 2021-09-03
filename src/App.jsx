import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'
import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}
