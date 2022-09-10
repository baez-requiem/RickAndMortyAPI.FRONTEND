type InputProps = {
  value: string
  name?: string
  type?: 'text' | 'email' | 'password'
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  icon?: JSX.Element
  onChange: (arg0: string) => any
  onIconClick?: (arg0: string) => any
}

export default InputProps