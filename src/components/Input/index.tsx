import { Container, IconContainer, StyledInput } from "./styles"
import InputProps from "./types"

const Input = ({
  icon,
  onIconClick,
  value,
  placeholder = '',
  type = 'text',
  name = '',
  size = 'md',
  onChange
}: InputProps) => (
  <Container size={size}>
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />

    {icon && (
      <IconContainer
        hasAction={!!onIconClick}
        onClick={() => onIconClick?.(value)}
      >
        {icon}
      </IconContainer>
    )}
  </Container>
)


export default Input