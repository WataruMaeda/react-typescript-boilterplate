import ReactDOM from 'react-dom'
import App from './Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
