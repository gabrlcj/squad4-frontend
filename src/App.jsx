import { Header } from './components/Header'
import { LoginPage } from './components/LoginPage'
import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LoginPage />
    </>
  )
}
