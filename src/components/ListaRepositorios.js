import styled from "styled-components"

const StyledListaRepos = styled.ul`
    display:flex;
    flex-direction:column;
    gap: 3rem;
`

export default function ListaRepositorios({ children }) {
    return (
        <StyledListaRepos>
            {children}
        </StyledListaRepos>
    )
}