
export type CharacterResults = {
  id: string
  name: string
  image: string
}

type CharacterInfo = {
  count: number
  pages: number
  next: string
}

type CharacterType = {
  info: CharacterInfo
  results: CharacterResults[]
}

export type CharacterData = {
  characters: CharacterType
}
