import { Divider, LoadIcon, Modal } from "../"

import {
  Card,
  CharImg,
  Container,
  DetailInfo,
  DetailTitle,
  LoadContainer,
  DetailsContainer,
} from "./styles"

import { useCharacterDetails } from "./hooks/useCharacterDetails"

import CharacterDetailsProps from "./types"

const CharacterDetails = (props:CharacterDetailsProps) => {

  const { character, loading } = useCharacterDetails(props)

  return (
    <Modal show={!!props.id} onClose={props.onClose}>
      <LoadContainer $loading={loading}>
        <LoadIcon size={60} />
      </LoadContainer>
      {(!loading && character) ? (
        <Container>
          <Card>
            <CharImg src={character?.image} />
          </Card>
          <DetailsContainer>
            <DetailTitle>Details</DetailTitle>
            <Divider my={20} />
            <DetailInfo>
              <span>Name:</span>
              <span>{character?.name}</span>
            </DetailInfo>
            <DetailInfo>
              <span>Status:</span>
              <span>{character?.status}</span>
            </DetailInfo>
            <DetailInfo>
              <span>Specie:</span>
              <span>{character?.species}</span>
            </DetailInfo>
            <DetailInfo>
              <span>Gender:</span>
              <span>{character?.gender}</span>
            </DetailInfo>
            <DetailInfo>
              <span>Times seen:</span>
              <span>{character?.episode.length}</span>
            </DetailInfo>
            <DetailInfo>
              <span>Created at:</span>
              <span>{new Date(character?.created).toLocaleDateString()}</span>
            </DetailInfo>
          </DetailsContainer>
        </Container>
      ) : null}
    </Modal>
  )
}

export default CharacterDetails