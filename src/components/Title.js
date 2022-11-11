import styled from "styled-components";

const StyledTitle = styled.h1`
color: green;
background-color: #202020;
padding: 1rem 4rem;
`;

export default function Title({children}) {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}