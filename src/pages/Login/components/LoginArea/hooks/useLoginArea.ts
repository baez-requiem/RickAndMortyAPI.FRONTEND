import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { AuthContext } from '../../../../../Context/Auth'
import { validateEmail } from '../../../../../utils'
import { ErrorsloginType, loginType } from '../types'

const useLoginArea = () => {
  const [useWasFound, setWasFound] = useState<boolean|null>(null)

  const { handleLogin, loading } = useContext(AuthContext)

  const submit = async (values:loginType) => {
    const wasFound = await handleLogin(values)

    setWasFound(wasFound)
  }

  const validate = (values:loginType) => {
    const errors:ErrorsloginType = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Required'
    }

    return errors
  }
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: submit
  })
  
  return {
    formik,
    loading,
    notFound: useWasFound === false
  }
}

export { useLoginArea }