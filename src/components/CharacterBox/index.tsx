import { BsStarFill } from "react-icons/bs"
import { CharImg, CharImgContainer, Container, FavoriteContainer, FavoriteIconContainer, InfosContainer, StyledH3 } from "./styles"

import Private from "../Private"

import CharacterBoxProps from "./types"
import { useCharacterBox } from "./hooks/useCharacterBox"

const CharacterBox = ({ data, onClick, isFavorite }:CharacterBoxProps) => {

  const { id, image, name } = data

  const { useFav, toogleFav } = useCharacterBox(id, isFavorite)

  return (
    <Container>
      <Private>
        <FavoriteContainer isFavorite={useFav}>
          <FavoriteIconContainer onClick={toogleFav}>
            <BsStarFill />
          </FavoriteIconContainer>
        </FavoriteContainer>
      </Private>

      <CharImgContainer onClick={() => onClick?.(id)}>
        <CharImg src={image} alt={`picture of ${name}`} />
      </CharImgContainer>
      
      <InfosContainer onClick={() => onClick?.(id)}>
        <StyledH3>{name}</StyledH3>
      </InfosContainer>
    </Container>
  )
}

export default CharacterBox