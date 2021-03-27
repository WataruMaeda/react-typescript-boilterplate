import Spinner from '../Spinner'
import './button.module.scss'

export interface ButtonProps {
  label?: string
  className?: string
  style?: {}
  spinnerStyle?: {}
  children?: Node
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = '',
  style = {},
  spinnerStyle = {
    color: 'black',
    size: '1.5rem',
  },
  onClick = () => null,
  children,
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
      <Spinner {...spinnerStyle} isLoading={isLoading} />
    ) : (
      <>
        {label}
        {children}
      </>
    )}
  </button>
)

export default Button
