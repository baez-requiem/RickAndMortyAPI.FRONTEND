import { AiOutlineLoading } from 'react-icons/ai'
import { Container } from './styles'

const LoadIcon = ({ size = 20 }: { size?: number }) => (
  <Container>
    <AiOutlineLoading size={size} />
  </Container>
)


export default LoadIcon