import styled from "styled-components"

const StyledConteudo = styled.div`
    
    padding: 2rem 4rem; 
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default function Conteudo({children}){
    return (
        <StyledConteudo>
            {children}
        </StyledConteudo>  
    )
}