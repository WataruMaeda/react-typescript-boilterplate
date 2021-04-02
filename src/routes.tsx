import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from 'scenes/dashboard'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
