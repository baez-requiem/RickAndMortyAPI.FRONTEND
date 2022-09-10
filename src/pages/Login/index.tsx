import { BsArrowLeftShort } from "react-icons/bs"
import { LoginArea, SignUpArea } from "./components"
import { useLogin } from "./hooks/useLogin"
import { Back, Container, ContainerBackground, Content } from "./styles"

const Login = () => {

  const { useAreaType, setAreaType, navigateToHome } = useLogin()

  return (
    <Content>
      <ContainerBackground />
      <Container>
        <Back>
          <BsArrowLeftShort size={40} onClick={navigateToHome} />
        </Back>
        {useAreaType
          ? <SignUpArea change={() => setAreaType(false)} />
          : <LoginArea  change={() => setAreaType(true)} />
        }
      </Container>
    </Content>
  )
}

export default Login