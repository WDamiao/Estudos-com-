import NextLink from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled.div`
    padding: 1rem;
    color: white;
    background-color: white;
    border: 1px solid white;
    &:hover {
        color: greenyellow;
        background-color: #f9f9f9;
    }
`

export default function Link({ children, href }) {
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    )
}