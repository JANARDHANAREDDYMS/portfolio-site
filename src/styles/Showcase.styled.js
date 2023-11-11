import styled from "styled-components"

export const ShowcaseParticleContainer = styled.div`
    postion:relative;
    max-width:300px;
`

export const ShowcaseImageCard = styled.div`
    border: 6px solid white;
    width: max-content;
    
    border-radius: 4rem;
    position: relative;
    overflow:hidden;

    img {
        width: 300px; // Set the desired width
        height: auto; // Set height to "auto" to maintain aspect ratio
    }
`


export const Particle = styled.img`
    position:absolute;
    top:${({top})=>top};
    left:${({left})=>left};
    right:${({right})=>right};
    bottom:${({bottom})=>bottom};
    transform: rotate(${({rotate})=>rotate});


`