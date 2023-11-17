import * as S from "./styles"
import linikeratuando from "../../assets/linikeratuando.png"
import linikerchorando from "../../assets/linikerchorando.png"
import { ComponentFooter } from "../../components"


export function Mliniker () {
    return (
        <>
            <S.Section>

<header>
    <h1 className="h1h1">
         Liniker - Musicalidade
    </h1>
</header>

<div className="divimgs">
    <img className="imgsmliniker" src={ linikeratuando } alt="liniker atuando na série" />
    <img className="imgsmliniker" src={ linikerchorando } alt="Liniker chorando ao receber o Grammy Awards" />
</div>

        <div>
        <p className="pinformation">Liniker é cantora, compositora, artista visual e atriz. <br />
                Em meio à sua família, se ouvia muito samba, samba-rock e soul. <br />
                Como intérprete e pessoa, não se define como homem, nem como mulher, sendo um exemplo de pessoa não-binária. <br />
                O talento da banda "Liniker e os Caramelows" resultou nas primeiras turnês do grupo, que ultrapassaram fronteiras. Chegaram na Europa, Angola, Estados Unidos,
                e muito mais. <br />
                O segundo disco da banda, que mistura reggae, funk, R&B, MPB e soul, chegou a ser indicado ao Grammy Latino de Melhor Álbum Pop Contemporâneo em Língua
                Portuguesa, em 2019. <br />
                Com o início de sua carreira solo em 2020, e com o lançamento de seu primeiro álbum solo, "Indigo Borboleta Anil, Liniker se tornou a primeira artista
                transgênero brasileira a vencer um Grammy Latino. A cantora venceu a categoria Melhor Álbum de Música Popular Brasileira com o disco. <br />
                Em 2021, estreou como atriz na série "Manhãs de Setembro". Graças ao papel de Cassandra, Liniker recebeu diversos prêmios, como “Atriz do Ano”
                no “Prêmio Geração Glamour”, “TV e Streaming” no “Prêmio Arcanjo de Cultura” e “Melhor Atriz Série (Brasil)” na primeira edição da “CCXP Awards”.
            </p>
        </div>
    

    </S.Section>

    <ComponentFooter />
    
    </>
    )
} 