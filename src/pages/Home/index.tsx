import * as S from "./styles"
import linikercapa from "../../assets/linikercapa.jpg"
import perfilvazio from "../../assets/perfilvazio.webp"

export function Home() {
    return (


        <S.Section>
            <p className="pinformation">Conheça o trabalho e biografia de artistas!</p>

            <div>
                <a href="/Liniker">
                    <figure>
                    <img className="capas" src= { linikercapa } alt="Liniker"/>
                        <figcaption className="figcaption">
                            Liniker
                        </figcaption>
                    </figure>
                    </a>

                <a href="/Perfilvazio">
                    <figure>
                    <img className="capas" src={ perfilvazio } alt="Artista à atualizar"/>
                        <figcaption className="figcaption">
                            À atualizar...
                        </figcaption>
                    </figure>
                </a>
            </div>
        </S.Section>
    )
}