import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;
    width: 18rem;
    height: 15rem;
    background-color: ${props => props.theme["gray-500"]};
    border-radius: 12px;

    text-align: center;

    h2 {
        font-size: 5rem;
    }

    h3 {
        font-size: 1.5rem;
    }
`