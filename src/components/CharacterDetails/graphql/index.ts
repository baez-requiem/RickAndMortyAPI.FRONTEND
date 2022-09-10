import { gql } from "@apollo/client"

const GET_CHARACTER = gql`
  query($id: ID!) {
    character(id:$id){
      name
      status
      species
      gender
      image
      episode {
        name
      }
      created
    }
  }
`

export { GET_CHARACTER }