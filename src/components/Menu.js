import styled from "styled-components"
import Link from "./Link"

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    section{
        width: 150px;
        height: 40px;
        background-color: red;
        text-align: center;
        padding-top: 10px
    }
    ul {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }
`

export default function Menu(){
    return (
            <StyledMenu>
                <section>LOGO</section>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/repos">Repositorios</Link></li>
                        <li><Link href="/">Redes</Link></li>
                    </ul>
                </nav>
            </StyledMenu>
    )
}