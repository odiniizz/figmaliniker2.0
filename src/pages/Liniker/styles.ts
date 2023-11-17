import styled from "styled-components"

export const Section = styled.section `
    
background: rgb(242,107,207);
background: linear-gradient(180deg, rgba(84,230,238,1) 0%, rgba(242,107,207,1) 86%);
min-height: calc(103vh - 3rem);

.capas {
        border-radius: 50%;
        height: 15rem;
    }

    
    div {
        display: grid;
        grid-template-columns: auto auto;
        text-align: center;
        padding-inline: 30rem;
        align-items: center;
        height: 48rem;
    }

    .h1h1 {
        font-size: 80px;
        text-align: center;
        font-family: 'Tulpen One', cursive;
        font-weight: 200;
    }
    

.figcaption{
    padding: 3px;
    text-align: center;
    font-size: 25px;
    color: black;
}
`
