import * as S from "./styles"
import React from "react"
import { ComponentHeader } from "../../components"
import linikerfundo from "../../assets/linikerfundo.jpg"
import indigoborboletaanil from "../../assets/indigoborboletaanil.jpg"


export function Liniker() {
    return (
        <>
        <section style={{
            height:'85vh',
            background: 'rgb(242,107,207)',
            background: 'linear-gradient(180deg,  #54e6eeea 0%, #f26bceed 86%)',
        }}>

        
        <ComponentHeader />


        <S.Section>

        <div>
            <a href="/Mliniker"><img className="bla" src= { linikerfundo } alt="Liniker - Vida e Carreira"/></a>
            <a href="/Vcliniker"><img className="bla" src={ indigoborboletaanil } alt="Liniker - Musicalidade"/></a>
        </div>
            
            
        </S.Section>

        </section>
        </>
    )
}