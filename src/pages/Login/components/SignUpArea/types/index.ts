export type SignUpType = {
  email: string
  name: string
  password: string
}

export type ErrorsSignUpType = {
  email?: string
  name?: string
  password?: string
}

export type SignUpMutationType = {
  status: boolean
  message: string
}

export type SignUpMutationDataType = {
  signUp: SignUpMutationType
}