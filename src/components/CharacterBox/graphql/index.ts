import { gql } from "@apollo/client"

const ADD_FAV = gql`
  mutation ($token: String!, $data: FavoriteCharacterInputData!) {
    addFavoriteCharacter (token:$token, data:$data){
      status
      message
    }
  }
`

const REMOVE_FAV = gql`
  mutation ($token: String!, $id_api:String!) {
    removeFavoriteCharacter (token:$token, id_api:$id_api){
      status
      message
    }
  }
`

const GET_CHARACTER = gql`
  query ($id: ID!) {
    character(id:$id){
      id
      name
      status
      species
      type
      gender
      origin { name }
      location { name }
      image
      episode { episode }
      created
    }
  }
`

export { ADD_FAV, REMOVE_FAV, GET_CHARACTER }