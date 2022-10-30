import styled from "styled-components";

export const TextDefaultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    max-width: 32rem;

    h2 {
        font-size: 3rem;
        color: ${props => props.theme.white};
    }
    p {
        font-size: 1.2rem;
        color: ${props => props.theme["gray-300"]};
    }
`