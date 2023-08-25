import * as S from "./styles"
import React from "react"
import linikerfundo from "../../assets/linikerfundo.jpg"
import indigoborboletaanil from "../../assets/indigoborboletaanil.jpg"


export function Liniker() {
    return (
        <>



        <S.Section>

        <div>
            <a href="/Vcliniker">
                <figure>
                    <img className="capas" src= { linikerfundo } alt="Liniker - Vida e Carreira"/>
                        <figcaption className="figcaption">
                            Vida e Carreira
                        </figcaption>
                </figure>
            </a>

            <a href="/Mliniker">
                <figure>
                    <img className="capas" src={ indigoborboletaanil } alt="Liniker - Musicalidade"/>
                        <figcaption className="figcaption">
                            Musicalidade
                        </figcaption>
                </figure>
                </a>
        </div>
            
        </S.Section>

        </>
    )
}