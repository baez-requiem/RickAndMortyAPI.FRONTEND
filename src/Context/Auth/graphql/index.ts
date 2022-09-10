import { gql } from "@apollo/client"

const LOGIN = gql`
  mutation ($data: UserLoginInputData!) {
    login (data:$data){
      user_id,
      token
    }
  }
`

export { LOGIN }