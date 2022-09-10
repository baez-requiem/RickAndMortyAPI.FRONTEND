import { useEffect, useState, useContext } from 'react'
import { useQuery } from "@apollo/client"
import { GET_CHARACTERS, GET_FAVORITES } from "../graphql"
import { CharacterData, CharacterResults } from '../types'
import { serverClient } from '../../../../../lib/apollo'
import { AuthContext } from '../../../../../Context/Auth'

const useMain = () => {
  const token = localStorage.getItem('token')

  const { authenticated } = useContext(AuthContext)
  
  const {
    data,
    loading,
    fetchMore,
  } = useQuery<CharacterData>(GET_CHARACTERS, { 
    variables: { page: 1, filter: {} }
  })

  const { data: favoritesData } = useQuery(GET_FAVORITES, { client: serverClient, variables: { token }, skip: !authenticated})

  const [useCharacters, setCharacters] = useState<CharacterResults[]>([])
  const [useNextPage, setNextPage] = useState<string|number>(1)
  const [useSpecieFilter, setSpecieFilter] = useState<string>('')
  const [useNameFilter, setNameFilter] = useState<string>('')
  const [useCharacterDetail, setCharacterDetail] = useState<string|null>(null)

  const loadMore = async (page?: number, specie?: string) => {
    typeof specie === 'string' && setSpecieFilter(specie)

    const result = await fetchMore({
      variables: { 
        page: page ?? useNextPage,
        filter: {
          species: specie ?? useSpecieFilter,
          name: useNameFilter
        },
      },
      updateQuery: (_, { fetchMoreResult }) => fetchMoreResult,
    })

    if (result?.data?.characters?.results) {
      const characters = result.data.characters.results;

      (page ?? useNextPage) === 1
        ? setCharacters(characters)
        : setCharacters([...useCharacters, ...characters])
    }

    setNextPage(result?.data.characters.info.next || '')
  }

  useEffect(() => { loadMore(1) }, [])

  const count = data?.characters?.info?.count || 0
  const hasLoadMore = count > 0 && useNextPage
  const favorites:Array<string> = favoritesData?.favorites?.map((e: { id_api: string }) => e.id_api)

  return {
    hasLoadMore,
    count,
    useCharacters,
    useNameFilter,
    setNameFilter,
    useSpecieFilter,
    setSpecieFilter,
    loadMore,
    useCharacterDetail,
    setCharacterDetail,
    favorites,
    loading
  }
}

export { useMain }