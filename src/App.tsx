import Button from 'components/Button'
import { actions, selector } from 'modules/app.module'
import { useDispatch, useSelector } from 'utils/hook'
import logo from './logo.svg'
import './App.scss'

const App = () => {
  const state = useSelector(selector)
  const dispatch = useDispatch()
  console.log('[##] actions', actions)
  console.log('[##] state', state)
  const handleUpdateLogin = () => {
    dispatch(actions.setLoggedIn(true))
    // console.log('[##] actions', appActions)
    // actions.setLoggedIn({ payload: !loggedIn })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{`Dashboard: login status: ${loggedIn}`}</p> */}
        <Button label="Update Login Status" onClick={handleUpdateLogin} />
      </header>
    </div>
  )
}

export default App
