import styled from "styled-components"

const StyledFooter = styled.footer`
    height: 15vh;
    width:100%;
    background-color: orange;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        background-color: orange;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>Desenvolvido por Wesley Damiao</p>
        </StyledFooter>
    )
}