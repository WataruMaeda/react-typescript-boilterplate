import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import store from 'utils/store'
import { styler, colors } from 'theme'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'theme/app.scss'

import Router from './routes'

const styles: { [key: string]: any } = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
})

const App = () => {
  useEffect(() => {
    Object.keys(colors).forEach((key) => {
      const cssKey = `--${key}`
      const cssVal = colors[key]
      document.body.style.setProperty(cssKey, cssVal)
    })
  }, [])

  return (
    <div className={styles.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Typescript Boilerplate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
