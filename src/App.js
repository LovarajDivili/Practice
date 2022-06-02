import NotFound from './components/NotFound'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route exact path="/notFound" component={NotFound} />
      </Switch>
  </BrowserRouter>
  )

}
export default App