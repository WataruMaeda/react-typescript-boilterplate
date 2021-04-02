import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import store from 'utils/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'theme/app.scss'

import Router from './routes'

const App = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React Typescript Boilerplate</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
)

export default App
