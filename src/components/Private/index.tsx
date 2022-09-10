import { useContext } from 'react'
import { AuthContext } from "../../Context/Auth"
import { Navigate } from 'react-router-dom'

interface PrivateProps {
  children: React.ReactNode
  redirect?: boolean
}

const Private = ({ children, redirect }: PrivateProps) => {
  const { authenticated, loading } = useContext(AuthContext)
 
  if (loading) {
    return <></>
  }

  if (!authenticated) {
    return redirect
      ? <Navigate to={'/'} />
      : <></> 
  } 

  return (
    <>
      {children}
    </>
  )
}

export default Private