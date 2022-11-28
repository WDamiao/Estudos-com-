import styled from "styled-components"
import Link, { StyledLink } from "./Link"

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .logo{
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
                <div className="logo">LOGO</div>
                <nav>
                    <ul>
                        <li><StyledLink><Link href="/">Home</Link></StyledLink></li>
                        <li><StyledLink><Link href="/repos">Repositorios</Link></StyledLink></li>
                        <li><StyledLink><Link href="/">Redes</Link></StyledLink></li>
                    </ul>
                </nav>
            </StyledMenu>
    )
}