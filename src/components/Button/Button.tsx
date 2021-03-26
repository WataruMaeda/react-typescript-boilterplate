import './button.module.scss'

type ButtonProps = {
  label?: string
  className?: string
  style?: Object
  // spinnerStyle?: Object
  children?: Node
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isLoading?: boolean
}

const defaultProps = {
  label: '',
  className: '',
  style: {},
  // spinnerStyle: {},
  onClick: () => {},
  children: null,
  disabled: false,
  isLoading: false,
}

const Button = ({
  label,
  className,
  style,
  // spinnerStyle,
  onClick,
  children,
  disabled,
  isLoading,
}: ButtonProps) => (
  <button
    type="button"
    className={className}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
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

Button.defaultProps = defaultProps

export default Button
