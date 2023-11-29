import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Menu = styled.menu`

  background-color: none;
  border-bottom: none;
  display: flex;
  height: 3rem;
  width: 100%;

  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    @media (max-width: 840px) {
      display: none;
    }
  }

  nav {
    width: 100%;
    padding-left: 20rem;
    display: flex;
    align-items: center; /* Adicionado para centralizar verticalmente */
    justify-content: space-between; /* Adicionado para espaçar os elementos */
  }

  img {
    width: 50px;
  }

  nav ul {
    padding-top: 1rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 26px;
  }

  nav ul a {
    display: flex;
    text-decoration: none;
    color: ${colors.black};
    padding:6rem;
  }

  nav ul li:hover {
    text-decoration: underline;
    color: ${colors.black};
  }

  /* Adicionado estilo para o botão de logout */
  .locad {
    display: flex;
    align-items: center;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

`;
export const NavBar = styled.nav`
  /* Navegação */
  background-color: none;
  @media (max-width: 840px) {
    display: none;
  }
`
