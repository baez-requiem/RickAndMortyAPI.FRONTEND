import { gql } from "@apollo/client"

const SIGNUP = gql`
  mutation ($data: UserInputData!) {
    signUp (data:$data){
      status
      message
    }
  }
`

export { SIGNUP }