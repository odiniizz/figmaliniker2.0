import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyle";
import { Rotas } from "./routes/index.tsx"
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/authContext.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <AuthProvider>
            <Rotas />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;