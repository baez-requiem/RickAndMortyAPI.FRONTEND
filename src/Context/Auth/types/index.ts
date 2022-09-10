export type loginType = {
  email: string
  password: string
}

export type ErrorsloginType = {
  email?: string
  password?: string
}

export type LoginMutationType = {
  user_id: string
  token: string
}

export type LoginMutationDataType = {
  login: LoginMutationType
}