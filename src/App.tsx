import Button from 'components/Button'
import Connector from 'utils/connector'
import logo from './logo.svg'
import './App.scss'

interface AppProps {
  appActions: {}
  loggedIn: boolean
}

const App: React.FC<AppProps> = ({ appActions, loggedIn }) => {
  console.log('[##] loggedIn', loggedIn)
  const handleUpdateLogin = () => {
    console.log('[##] actions', appActions)
    // actions.setLoggedIn({ payload: !loggedIn })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Dashboard: login status: ${loggedIn}`}</p>
        <Button label="Update Login Status" onClick={handleUpdateLogin} />
      </header>
    </div>
  )
}

export default (props: {}) => (
  <Connector>
    {({
      actions,
      state: {
        app: { loggedIn },
      },
    }) => <App appActions={actions} loggedIn={loggedIn} {...props} />}
  </Connector>
)
