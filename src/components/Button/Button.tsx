import './button.module.scss'

export interface ButtonProps {
  label?: string
  className?: string
  style?: {}
  // spinnerStyle?: Object
  children?: Node
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = '',
  style = {},
  // spinnerStyle,
  onClick = () => null,
  children,
  disabled = false,
  isLoading = false,
  ...props
}) => (
  <button
    type="button"
    className={className}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...props}
  >
    {/* {isLoading ? (
      <Spinner iconStyle={spinnerStyle} />
    ) : (
      <>
        {label}
        {children}
      </>
    )} */}
    <>
      {label}
      {children}
    </>
  </button>
)

export default Button
