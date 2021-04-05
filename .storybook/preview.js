import '!style-loader!css-loader!sass-loader!../src/theme/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { colors } from '../src/theme'

Object.keys(colors).forEach((key) => {
  const cssKey = `--${key}`
  const cssVal = colors[key]
  document.body.style.setProperty(cssKey, cssVal)
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
