import * as S from "./styles"
import linikerpeb from "../../assets/linikerpeb.png"
import linikereoscaramelows from "../../assets/linikereoscaramelows.png"
import linikermic from "../../assets/linikermic.png"
import linikerdourada from "../../assets/linikerdourada.png"
import linikergrammy from "../../assets/linikergrammy.png"


export function Vcliniker() {
    return (
        <>
<S.Section>

    <header>
        <h1 className="h1h1">
             Liniker - Vida e Carreira
        </h1>
    </header>

<div className="divimgs">
        <img className="imgsmliniker" src={ linikerpeb } alt="liniker sorrindo" />
        <img className="imgsmliniker" src={ linikereoscaramelows } alt="Liniker e os Caramelows" />
        <img className="imgsmliniker" src={ linikermic } alt="liniker cantando" />
        <img className="imgsmliniker" src={ linikerdourada } alt="liniker cantando" />
        <img className="imgsmliniker" src={ linikergrammy } alt="Liniker recebendo seu Grammy" />

 </div>

            <div>
            <p className="pinformation">Liniker de Barros Ferreira Campos nasceu em Araraquara, cidade localizada no interior de São Paulo. <br />
            Nascida em uma família de músicos, teve contato com a arte desde sempre. Apesar de já ter mostrado seu talento vocal, apresentava certa timidez por viver
            entre profissionais. Isso mudou após iniciar a carreira teatral, na adolescência. <br />
            Em 2014, ingressou na Escola Livre de Teatro, em Santo André, e começou
            a investir em uma identidade visual andrógina. Como artista, seu visual passou a misturar turbante, saia, batom e bigode em suas performances musicais que
            incorporam elementos cênicos à sua voz. <br />
            Em 2015, formou, despretensiosamente, a banda "Liniker e os Caramelows", formada por amigos do teatro.
            Após o lançamento de seu primeiro EP, "Cru", que fez sucesso devido ao seu primeiro single, "Zero", lançaram em 2016 seu disco de estreia, intitulado "Remonta", gravado com a ajuda dos fãs por meio do
            financiamento coletivo. O disco foi um sucesso nacional e internacionalmente.
            Em 2020, Liniker anuncia a separação da banda, e no ano seguinte, lança seu primeiro álbum solo, "Indigo Borboleta Anil", que conta com a colaboração de
            Milton Nascimento. </p>
            </div>
        

        </S.Section>
        </>
    )
}

