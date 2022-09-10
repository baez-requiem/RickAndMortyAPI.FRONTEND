import { useMutation, useQuery } from '@apollo/client'
import { useState, useContext } from 'react'
import { AuthContext } from '../../../Context/Auth'
import { serverClient } from '../../../lib/apollo'
import { ADD_FAV, REMOVE_FAV, GET_CHARACTER } from '../graphql'
import { CharacterType } from '../types'

const opts = {
  client: serverClient
}

const useCharacterBox = (id_api: string, isFavorite = false) => {
  const { authenticated } = useContext(AuthContext)

  const [addFav] = useMutation(ADD_FAV, opts)
  const [removeFav] = useMutation(REMOVE_FAV, opts)

  const { data, loading } = useQuery(GET_CHARACTER, { variables: { id:id_api }})

  const [useFav, setFav] = useState(isFavorite)

  const toogleFav = async () => {
    if (!authenticated || loading) { return }
    
    const token = localStorage.getItem('token')

    const newValue = !useFav

    if (newValue) {
      const { character }: { character: CharacterType} = data

      const variables = {
        token,
        data: {
          id_api: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          created: new Date(character.created).toISOString(),
          gender: character.gender,
          image: character.image,
          episode: character.episode.map(e => e.episode),
          location_name: character.location.name,
          origin_name: character.origin.name,
        }
      }

      const response = await addFav({ variables })

      response?.data?.addFavoriteCharacter?.status && setFav(newValue)
    } else {
      const response = await removeFav({ variables: { token, id_api } })
      response?.data?.removeFavoriteCharacter?.status && setFav(newValue)
    }
  }

  return {
    useFav,
    toogleFav
  }
}

export { useCharacterBox }