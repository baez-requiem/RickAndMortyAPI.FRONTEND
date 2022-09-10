import { Button, Divider, Input } from "../../../../components"
import { AreaContainer, ErrorField } from "../../styles"
import { useLoginArea } from "./hooks/useLoginArea"

const LoginArea = ({ change }:{ change: () => any }) => {

  const { formik, notFound, loading } = useLoginArea()

  return (
    <form onSubmit={formik.handleSubmit}>
      <AreaContainer>
        <h1>Login</h1>

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
          name="password"
          type="password"
          size="sm"
          value={formik.values.password}
          onChange={v => formik.setFieldValue('password', v)}
          placeholder="Password"
        />
        <ErrorField>{formik.errors.password}</ErrorField>

        <Divider />

        <Button type="submit" disabled={loading} color="success">Login</Button>

        {notFound && (
          <ErrorField>User not found</ErrorField>
        )}

        <Divider line my={20} />

        <p>or</p>

        <Divider />

        <h4 onClick={change}>Create new account</h4>
      </AreaContainer>
    </form>
  )
}

export default LoginArea