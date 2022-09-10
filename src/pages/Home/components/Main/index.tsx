import { Button, Divider, Input, List, LoadIcon, Modal } from "../../../../components"
import { ButtonContainer, CharactersContainer, Container, CountContainer, DataContainer, DataContent, ListContainer, SearchContainer } from "./styles"
import { FaSearch } from 'react-icons/fa'
import { CharacterBox, CharacterDetails } from "../../../../components"

import { useMain } from "./hooks/useMain"
import { species } from "./constants"

const Content = () => {
  const {
    count,
    hasLoadMore,
    loading,
    useNameFilter,
    setNameFilter,
    useCharacters,
    useSpecieFilter,
    favorites,
    useCharacterDetail,
    setCharacterDetail,
    loadMore
  } = useMain()

  return (
    <Container>
      <CharacterDetails id={useCharacterDetail} onClose={() => setCharacterDetail(null)} />

      <SearchContainer>
        <h1>Select your character</h1>
        
        <Input
          placeholder="Search name"
          value={useNameFilter}
          onChange={setNameFilter}
          icon={<FaSearch />}
          onIconClick={_ => loadMore(1)}
        />
      </SearchContainer>

      <DataContainer>
        <ListContainer>
          <List data={species} onClick={v => loadMore(1, v)} value={useSpecieFilter} />
        </ListContainer>

        <DataContent>
          <CountContainer>
            <h2>{loading ? (<LoadIcon />) : count} Characters</h2>
          </CountContainer>

          <CharactersContainer>
            {useCharacters.map(e => (
              <CharacterBox
                data={e}
                key={`cb-` + e.id}
                isFavorite={favorites?.includes(e.id)}
                onClick={setCharacterDetail}
              />
            ))}
          </CharactersContainer>

          <Divider my={30} />

          {hasLoadMore && (
            <ButtonContainer>
              <Button onClick={() => loadMore()}>Load more characters</Button>
            </ButtonContainer>
          )}

        </DataContent>

      </DataContainer>
    </Container>
  )
}

export default Content