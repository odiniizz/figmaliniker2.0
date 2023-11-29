import * as S from "./styles"
import logo from "../../assets/home.svg"
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";



export function Menu() {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <>
        <S.Menu>
          <picture>
            <a href="/"><img src={logo} alt="Logo" /></a>
          </picture>
          <S.NavBar>
            <nav>
              {
                user ? (
                 <ul className="locad">
                    <li>
                      <Link to="/adm/message">Mensagem</Link>
                    </li>
                    <li>
                      <button onClick={logout}>{user.name} <GrLogout /></button>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link to="/Login">Login</Link>
                    </li>
                    <li>
                      <Link to="/Cadastrar">Cadastrar</Link>
                    </li>
                    </ul>
                )
              }
            </nav>
          </S.NavBar>
        </S.Menu>
    </>
  )
}