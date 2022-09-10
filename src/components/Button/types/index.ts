type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
  color?: 'info' | 'success' | 'warning' | 'danger'  
  onClick?: () => any
}

export default ButtonProps