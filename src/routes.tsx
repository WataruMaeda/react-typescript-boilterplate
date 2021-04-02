import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
