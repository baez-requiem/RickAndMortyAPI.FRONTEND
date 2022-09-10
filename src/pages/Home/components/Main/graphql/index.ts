import { gql } from "@apollo/client"

const GET_CHARACTERS = gql`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page:$page, filter:$filter){
      info {
        count
        pages
        next
      }
      results {
        id
        name
        image
      }
    }
  }
`

const GET_FAVORITES = gql`
  query($token: String!) {
    favorites(token: $token) {
      id_api
    }
  }
`

export { GET_CHARACTERS, GET_FAVORITES }