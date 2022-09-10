import { gql } from "@apollo/client";

const FAVORITES = gql`
  query($token: String!) {
    favorites(token: $token) {
      id_api
      name
      image
    }
  }
`

export { FAVORITES }