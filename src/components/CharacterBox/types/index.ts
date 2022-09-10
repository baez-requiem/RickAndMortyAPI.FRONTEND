export type CharacterType = {
  id: string
  name: string
  status: string
  species: string
  created: Date
  gender: string
  image: string
  episode: [{episode: string}]
  location: {name: string}
  origin: {name: string}
}

type DataType = {
  id: string
  name: string
  image: string
}

type CharacterBoxProps = {
  data: DataType
  onClick: (arg0: string) => any
  isFavorite?: boolean
}

export default CharacterBoxProps