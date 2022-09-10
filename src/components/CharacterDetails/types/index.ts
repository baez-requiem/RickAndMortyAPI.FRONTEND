export type CharacterType = {
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  species: 'Human' | 'Alien'
  image: string
  episode: string[]
  created: string
}

export type CharacterData = {
  character: CharacterType
}

type CharacterDetailsProps = {
  id:string|null
  onClose: (arg0:any) => any 
}

export default CharacterDetailsProps