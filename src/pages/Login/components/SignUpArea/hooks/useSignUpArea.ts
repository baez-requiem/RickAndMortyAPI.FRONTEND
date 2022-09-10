import { useState } from 'react'
import { useFormik } from 'formik'
import { sleep, validateEmail } from '../../../../../utils'
import { ErrorsSignUpType, SignUpMutationDataType, SignUpMutationType, SignUpType } from '../types'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../graphql'
import { serverClient } from '../../../../../lib/apollo'

const useSignUpArea = (change: () => void) => {
  const [useSignUpResponse, setSignUpResponse] = useState<SignUpMutationType|null>(null)

  const [signup, { loading }] = useMutation<SignUpMutationDataType>(SIGNUP, { client: serverClient })

  const validate = (values:SignUpType) => {
    const errors:ErrorsSignUpType = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Password field must contain 8 or more characters'
    }

    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 3) {
      errors.name = 'Name field must contain 3 or more characters'
    }

    return errors
  }
  
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validate,
    onSubmit: async values => {
      const response = await signup({ variables: { data: values } })
      
      const status = response?.data?.signUp.status ?? false
      const message = response?.data?.signUp.message ?? 'An unknown error has occurred'

      setSignUpResponse({ status, message })

      await sleep(2000)

      status && change()
    }
  })

  return {
    formik,
    useSignUpResponse,
    loading
  }
}

export { useSignUpArea }