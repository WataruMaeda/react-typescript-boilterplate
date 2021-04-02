import Button from 'components/Button'
import { actions, selector } from 'modules/app.module'
import { useDispatch, useSelector } from 'utils/connector'
import logo from 'assets/images/logo.svg'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const { loggedIn } = useSelector(selector)
  const dispatch = useDispatch()

  const handleUpdateLogin = () => {
    dispatch(actions.setLoginAsync())
  }

  return (
    <div className={styles.root}>
      <header>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>{`Dashboard: login status: ${loggedIn}`}</p>
        <Button label="Update Login Status" onClick={handleUpdateLogin} />
      </header>
    </div>
  )
}

export default Dashboard
