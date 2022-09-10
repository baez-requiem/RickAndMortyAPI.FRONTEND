import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {

  const [useAreaType, setAreaType] = useState(true)

  const navigate = useNavigate()

  const navigateToHome = () => navigate('/')

  return {
    useAreaType,
    setAreaType,
    navigateToHome
  }
}

export  { useLogin }