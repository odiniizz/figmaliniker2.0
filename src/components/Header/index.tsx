import * as S from "./styles"
import logo from "../../assets/image 3.png"

export function Header() {
    return (
        <S.Header>
            <a href="/"><img src={ logo } alt="logo - site da liniker" /></a>
        </S.Header>
    )
}