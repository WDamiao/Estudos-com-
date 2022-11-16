import NextLink from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.p`
    padding: 1rem;
    color: white;
     :hover{
        color: greenyellow;
        background-color: #202020;
    }
`

export default function Link({ children, href }) {
    return (
        <NextLink href={href} passHref>
            <StyledLink>
                {children}
            </StyledLink>
        </NextLink>
    )
}