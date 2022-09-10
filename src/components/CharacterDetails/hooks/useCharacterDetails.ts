import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../graphql'

import CharacterDetailsProps, { CharacterData } from "../types"

const useCharacterDetails = ({id}:CharacterDetailsProps) => {
  const {
    data,
    loading
  } = useQuery<CharacterData>(GET_CHARACTER, {
    variables: { id: id },
    skip: !id
  })

  return {
    loading,
    character: data?.character
  }
}

export { useCharacterDetails }