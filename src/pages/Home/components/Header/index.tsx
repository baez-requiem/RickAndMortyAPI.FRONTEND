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

import portal from '../../../../../public/portal2.png'
import logo from '../../../../../public/logo.png'

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
        
        <PortalImg src={portal} opacity={.2} seconds={10.5} />
        <PortalImg src={portal} opacity={.8} />
        <PortalImg src={portal} opacity={.6} rotate={300} />
        <PortalImg src={portal} opacity={.4} rotate={170} />
        <PortalImg src={portal} opacity={.2} rotate={100} />
      
        <LogoImg src={logo} />
      </PortalContainer>

    </Container>
  )
}

export default Main