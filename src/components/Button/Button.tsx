import './button.module.scss'
import Spinner from '../Spinner'

export interface IButton {
  label?: string
  className?: string
  style?: {}
  spinner?: {}
  children?: Node
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isLoading?: boolean
}

const Button: React.FC<IButton> = ({
  label,
  className = '',
  style = {},
  onClick = () => null,
  children,
  spinner = {
    color: 'black',
    size: '1.5rem',
    isLoading: true,
  },
  disabled = false,
  isLoading = false,
  ...others
}) => (
  <button
    type="button"
    className={className}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...others}
  >
    {isLoading ? (
      <Spinner {...spinner} />
    ) : (
      <>
        {label}
        {children}
      </>
    )}
  </button>
)

export default Button
