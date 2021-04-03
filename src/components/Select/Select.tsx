import React from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import { styler, colors, rem } from 'theme'

type OptionType = {
  label: string
  value: any
}

interface OSelected {
  name: string
  value: OptionType
}

export interface ISelect {
  name?: string
  label?: string
  value?: { label: string; value: any }
  options?: Array<{ label: string; value: any }>
  placeholder?: string
  onChange?: (selected: OSelected) => void
  disabled?: boolean
  error?: string
  isMulti?: boolean
  isCreatable?: boolean
  className?: string
  style?: { [key: string]: any }
  selectClassName?: string
  selectStyle?: { [key: string]: any }
}

const styles: { [key: string]: string } = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 0,
  },
  border: {
    display: 'block',
    borderBottom: '1px solid black',
    width: '100%',
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
})

const Selector: React.FC<ISelect> = ({
  name = '',
  label = '',
  value,
  options = [],
  placeholder = '',
  onChange = () => null,
  disabled = false,
  error = '',
  isMulti = false,
  isCreatable = false,
  className = '',
  style = {},
  selectClassName = '',
  selectStyle = {},
}) => {
  const props = {
    placeholder,
    value,
    options,
    onChange: (selected: OptionType) =>
      onChange({ name: name, value: selected }),
    isMulti,
    className: selectClassName,
    styles: {
      clearIndicator: (x: { [key: string]: any }) =>
        rem({
          ...x,
          height: 'auto',
        }),
      indicatorsContainer: (x: { [key: string]: any }) =>
        rem({
          ...x,
          marginRight: 10,
        }),
      control: (x: { [key: string]: any }) =>
        rem({
          ...x,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: 'none',
          padding: 0,
        }),
      option: (x: { [key: string]: any }, option: { isFocused: boolean }) =>
        rem({
          ...x,
          color: colors.black,
          backgroundColor: option.isFocused && colors.cyan,
          // padding: 8,
          // fontSize: 14,
          // '&:hover': {
          //   backgroundColor: colors.cyan,
          // },
          // '&:active': {
          //   backgroundColor: colors.green,
          // },
        }),
      placeholder: (x: { [key: string]: any }) =>
        rem({
          ...x,
          color: colors.gray,
          fontSize: 12,
        }),
      valueContainer: (x: { [key: string]: any }) =>
        rem({
          ...x,
          marginLeft: 0,
          fontSize: 14,
        }),
      multiValue: (x: { [key: string]: any }) =>
        rem({
          ...x,
          marginLeft: 10,
        }),
      multiValueLabel: (x: { [key: string]: any }) =>
        rem({
          ...x,
        }),
      multiValueove: (x: { [key: string]: any }) =>
        rem({
          ...x,
        }),
      indicatorSeparator: (x: { [key: string]: any }) =>
        rem({
          ...x,
          // display: 'none',
        }),
      dropdownIndicator: (x: { [key: string]: any }) =>
        rem({
          ...x,
        }),
      ...selectStyle,
    },
    theme: (t: { [key: string]: any }) =>
      rem({
        ...t,
        borderRadius: 4,
        colors: {
          ...t.colors,
        },
        spacing: {
          ...t.spacing,
        },
      }),
    isDisabled: disabled,
  }

  return (
    <div className={`${styles.root} ${className}`} style={style}>
      {label && <b className={styles.label}>{label}</b>}
      {isCreatable ? <Creatable {...props} /> : <Select {...props} />}
      <span className={styles.border} style={{ borderColor: error && 'red' }} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default Selector
