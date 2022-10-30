import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 2px solid ${props => props.theme["black-500"]};
    padding: 2rem 0;
`