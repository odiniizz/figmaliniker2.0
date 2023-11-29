import { GlobalStyle } from "./styles/GlobalStyle";
import { Rotas } from "./routes/index.tsx"
import { BrowserRouter } from "react-router-dom"

export function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </>
  )
}