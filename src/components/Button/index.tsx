import { StyledButton } from "./styles"
import ButtonProps from "./types"

const Button = ({ children, onClick, disabled, ...props }:ButtonProps) => (
  <StyledButton
    {...props}
    disabled={disabled}
    onClick={() => !disabled && onClick?.()}
  >
    {children}
  </StyledButton>
)


export default Button