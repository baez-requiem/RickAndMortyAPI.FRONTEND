import { useContext, useState } from "react"
import { useQuery } from "@apollo/client"
import { serverClient } from "../../../lib/apollo"
import { AuthContext } from "../../../Context/Auth"
import { useNavigate } from "react-router-dom"
import { FAVORITES } from "../graphql"
import { FavoriteType } from "../types"

const useFavorites = () => {
  const [useCharacterDetail, setCharacterDetail] = useState<string|null>(null) 
  const token = localStorage.getItem('token')

  const { handleLogout } = useContext(AuthContext)

  const { data } = useQuery(FAVORITES, {
    client: serverClient,
    variables: { token },
    fetchPolicy: "no-cache"
  })

  const favorites: FavoriteType[] = data?.favorites || []

  const navigate = useNavigate()
  const navigateToHome = () => navigate('/')
  
  return {
    favorites,
    handleLogout,
    useCharacterDetail,
    setCharacterDetail,
    navigateToHome
  }
}

export { useFavorites }