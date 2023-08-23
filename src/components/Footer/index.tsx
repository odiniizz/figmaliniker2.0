import * as S from "./styles"
import insta from "../../assets/insta.png"
import spotify from "../../assets/spotify.png"

export function Footer() {
    return (
        <S.Footer>
            <a href="https://www.instagram.com/linikeroficial/" target= "blank"><img src= { insta } alt="instagram - liniker" /></a>
            <a href="https://open.spotify.com/intl-pt/artist/2O6q06oNcmOIPg1qidSU3C?si=DAnsxSgGRyu7Vu9RB6vZqQ" target= "blank"><img src= { spotify } alt="spotify - liniker" /></a>
        </S.Footer>
    )
}