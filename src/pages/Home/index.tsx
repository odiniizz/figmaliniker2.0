import * as S from "./styles"
import linikercapa from "../../assets/linikercapa.jpg"
import perfilvazio from "../../assets/perfilvazio.webp"

export function Home() {
    return (
        <S.Section>

            <header id="hhome">
                Conheça Novos Artistas!
            </header>
            <div>
                <a href="/Liniker"><img className="capas" src= { linikercapa } alt="Liniker"/></a>
                <a href="/perfilvazio"><img className="capas" src={ perfilvazio } alt="Artista à atualizar"/></a>
            </div>
        </S.Section>
    )
}