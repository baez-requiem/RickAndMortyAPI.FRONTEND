import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { serverClient } from '../../../lib/apollo'
import { LoginMutationDataType } from '../types'
import { LOGIN } from '../graphql'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const [login] = useMutation<LoginMutationDataType>(LOGIN, { client: serverClient })

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setAuthenticated(true)
    }

    setLoading(false)
  }, []);
  
  async function handleLogin(data: { email: string, password: string }) {
    const response = await login({ variables: { data } })

    const token = response.data?.login?.token

    if (token) {
      localStorage.setItem('token', token)
      setAuthenticated(true)
      navigate('/')

      return true
    }

    localStorage.setItem('token', '')
    setAuthenticated(false)

    return false
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    navigate('/login')
  }
  
  return { authenticated, loading, handleLogin, handleLogout }
}