import { Private, CharacterBox, CharacterDetails, Divider } from "../../components"
import { useFavorites } from "./hooks/useFavorites"
import { Container, Content, Link, NavBar } from "./styles"

const Favorites = () => {

  const {
    favorites,
    handleLogout,
    useCharacterDetail,
    setCharacterDetail,
    navigateToHome
  } = useFavorites()

  return (
    <Private redirect>
      <Content>
        <NavBar>
          <Link onClick={navigateToHome}>Home</Link>
          |
          <Link onClick={handleLogout}>Logout</Link>
        </NavBar>
        <Divider my={10} />
        <h1>Favorite characterss</h1>
        <Container>
          {favorites.map(e => (
            <CharacterBox data={{...e, id: e.id_api}} onClick={() => setCharacterDetail(e.id_api)} isFavorite />
          ))}
        </Container>
      </Content>
      <CharacterDetails id={useCharacterDetail} onClose={() => setCharacterDetail(null)} />
    </Private>
  )
}

export default Favorites