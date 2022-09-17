import { useContext } from 'react'
import { AuthContext } from '../../../../Context/Auth'
import { Private } from "../../../../components"
import { useNavigate } from 'react-router-dom'

import {
  Link,
  NavBar,
  LogoImg,
  Container,
  PortalImg,
  BottomGradient,
  PortalContainer,
  PortalBackground,
  ContainerBackground,
} from "./styles"

const Main = () => {

  const { authenticated, handleLogout } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <Container>
      <NavBar>
        <Private>
          <Link onClick={() => navigate('/favorites')}>Favoritos</Link> |
        </Private>
        
        <Link onClick={handleLogout}>{authenticated ? 'Logout' : 'Login'}</Link>
      </NavBar>
      <ContainerBackground>
        <BottomGradient />
      </ContainerBackground>
      <PortalContainer>
        <PortalBackground />
        
        <PortalImg opacity={.2} seconds={10.5} />
        <PortalImg opacity={.8} />
        <PortalImg opacity={.6} rotate={300} />
        <PortalImg opacity={.4} rotate={170} />
        <PortalImg opacity={.2} rotate={100} />
      
        <LogoImg />
      </PortalContainer>

    </Container>
  )
}

export default Main