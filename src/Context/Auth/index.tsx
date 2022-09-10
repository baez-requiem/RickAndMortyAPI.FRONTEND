import { createContext } from 'react'

import useAuth from './hooks/useAuth'

import { loginType } from './types'

interface AuthContextInterface {
  authenticated: boolean
  loading: boolean
  handleLogin: (data:loginType) => Promise<boolean>
  handleLogout: () => void
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const {
    authenticated,
    loading,
    handleLogin,
    handleLogout
  }: AuthContextInterface = useAuth()

  return (
    <AuthContext.Provider value={{ authenticated, loading, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
