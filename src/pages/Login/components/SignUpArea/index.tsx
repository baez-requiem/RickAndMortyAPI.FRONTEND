import { Button, Divider, Input } from "../../../../components"
import { AreaContainer, ErrorField, SuccessField } from "../../styles"
import { useSignUpArea } from "./hooks/useSignUpArea"

const SignUpArea = ({ change }:{ change: () => any }) => {

  const { formik, useSignUpResponse, loading } = useSignUpArea(change)

  return (
    <form onSubmit={formik.handleSubmit}>
      <AreaContainer>
        <h1>Sign Up</h1>

        <Divider my={10} />

        <Input
          name="email"
          type="email"
          size="sm"
          value={formik.values.email}
          onChange={v => formik.setFieldValue('email', v)}
          placeholder="E-mail"
        />
        <ErrorField>{formik.errors.email}</ErrorField>
        
        <Divider />
      
        <Input
          name="name"
          size="sm"
          value={formik.values.name}
          onChange={v => formik.setFieldValue('name', v)}
          placeholder="Name"
        />
        <ErrorField>{formik.errors.name}</ErrorField>
        
        <Divider />

        <Input
          name="password"
          type="password"
          size="sm"
          value={formik.values.password}
          onChange={v => formik.setFieldValue('password', v)}
          placeholder="Password"
        />
        <ErrorField>{formik.errors.password}</ErrorField>

        <Divider />

        <Button type="submit" disabled={loading} color="success">Create account</Button>

        {useSignUpResponse?.message && useSignUpResponse.status
          ? (<SuccessField>{useSignUpResponse?.message}</SuccessField>)
          : (<ErrorField>{useSignUpResponse?.message}</ErrorField>)
        }

        <Divider line my={20} />

        <p>or</p>

        <Divider />

        <h4 onClick={change}>Login now</h4>
      </AreaContainer>
    </form>
  )
}

export default SignUpArea