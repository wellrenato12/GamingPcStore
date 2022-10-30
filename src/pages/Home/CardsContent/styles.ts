import styled from "styled-components";

export const CardsContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    /* height: 40vh; */
    padding: 4rem;
    border-bottom: 2px solid ${props => props.theme["black-500"]};
`