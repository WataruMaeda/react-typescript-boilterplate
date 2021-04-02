import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Typescript Boilerplate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
