import styled from "styled-components"

const StyledListaRepos = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 3rem;
`

export default function ListaRepositorios({ children }) {
    return (
        <StyledListaRepos>
            {children}
        </StyledListaRepos>
    )
}