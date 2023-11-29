import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Inika', serif;
    box-sizing: border-box;
  }
  
`

export const colors = {
  azul: "#5ee7df",
  rosa: "#e700ff",
  white: "#fff",
  black:"#000"
}