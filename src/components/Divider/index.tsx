import { Container, Line } from "./styles"
import DividerProps from "./types"

const Divider = ({ line, ...props}:DividerProps) => (
  <Container {...props}>
    {line && <Line />}
  </Container>
)


export default Divider