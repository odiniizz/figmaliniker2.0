import * as S from "./styles"
import React from "react"
import linikerfundo from "../../assets/linikerfundo.jpg"
import indigoborboletaanil from "../../assets/indigoborboletaanil.jpg"
import { ComponentHeader, ComponentFooter } from "../../components"


export function Liniker() {
    return (
        <>


        <S.Section>

            <header>
                <h1 className="h1h1">
                    Liniker - Musicalidade
                </h1>
            </header>

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

        <ComponentFooter />

        

        </>
    )
}