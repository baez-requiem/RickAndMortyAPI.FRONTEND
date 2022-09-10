import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Context/Auth"
import Routes from "./router/index.routes"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
