import styled from "styled-components";

const StyledBanner = styled.div`
    width:100%;
    height: 20vh;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export default function Banner() {
    return (
        <StyledBanner>Banner</StyledBanner>
    )
}